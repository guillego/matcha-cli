#!/bin/bash

# GitHub repository information
REPO_OWNER="guillego"
REPO_NAME="matcha-cli"
LATEST_RELEASE_URL="https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/releases/latest"

# Determine the OS and architecture
OS=""
ARCH=""

case "$(uname -s)" in
    Darwin)
        OS="macos"
        ;;
    Linux)
        OS="linux"
        ;;
    MINGW*|MSYS*|CYGWIN*)
        echo "This script does not support Windows. Please use the PowerShell script."
        exit 1
        ;;
    *)
        echo "Unsupported OS"
        exit 1
        ;;
esac

case "$(uname -m)" in
    x86_64)
        ARCH="x64"
        ;;
    arm64)
        ARCH="arm64"
        ;;
    *)
        echo "Unsupported architecture"
        exit 1
        ;;
esac

# Construct the download URL
ARTIFACT_NAME="matcha-${OS}-${ARCH}"
DOWNLOAD_URL=""

# Fetch the latest release information and find the download URL for the artifact
echo "Fetching latest release information..."
RELEASE_INFO=$(curl -s "$LATEST_RELEASE_URL")
DOWNLOAD_URL=$(echo "$RELEASE_INFO" | grep "browser_download_url" | grep "$ARTIFACT_NAME" | cut -d '"' -f 4)

if [ -z "$DOWNLOAD_URL" ]; then
    echo "Could not find the download URL for $ARTIFACT_NAME"
    exit 1
fi

# Download the artifact to a local path
INSTALL_DIR="$HOME/bin"
INSTALL_PATH="$INSTALL_DIR/matcha"

echo "Downloading $ARTIFACT_NAME from $DOWNLOAD_URL..."
mkdir -p "$INSTALL_DIR"
curl -L "$DOWNLOAD_URL" -o "$INSTALL_PATH"
chmod +x "$INSTALL_PATH"

# Ensure the install directory is in the PATH
if [[ ":$PATH:" != *":$INSTALL_DIR:"* ]]; then
    echo "Adding $INSTALL_DIR to PATH..."
    SHELL_CONFIG_FILES=("$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile" "$HOME/.bash_profile")

    for config_file in "${SHELL_CONFIG_FILES[@]}"; do
        if [ -f "$config_file" ]; then
            echo "export PATH=\"$INSTALL_DIR:\$PATH\"" >> "$config_file"
        fi
    done
    export PATH="$INSTALL_DIR:$PATH"
fi

# Add an exception for the application in macOS
if [ "$OS" == "macos" ]; then
    echo "Adding spctl exception for $INSTALL_PATH..."
    sudo spctl --add "$INSTALL_PATH"
fi

echo "Installation completed. You can now run 'matcha' from your terminal."
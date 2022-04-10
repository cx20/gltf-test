# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.191.1/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 16, 14, 12
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
  && export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
  && export PUPPETEER_EXECUTABLE_PATH=`which chromium` \
  && apt-get -y install --no-install-recommends \
  unzip \
  wget \
  chromium \
&& rm -rf /var/lib/apt/lists/* \
&& ln -s /usr/bin/chromium /usr/bin/chromium-browser \
&& echo "progress = dot:giga" | tee /etc/wgetrc \
&& mkdir -p /mnt /opt /data \
&& wget https://github.com/andmarios/duphard/releases/download/v1.0/duphard -O /bin/duphard \
&& chmod +x /bin/duphard
RUN su node -c "npm install -g yarn"
RUN yarn install

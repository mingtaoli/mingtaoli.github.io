#!/bin/bash
# www.mingtaoli.cn 部署脚本 — Franklin.jl 版本
# 从 GitHub main 分支拉取源码，构建并部署

set -e

REPO_DIR=/srv/06www.mingtaoli.cn/repo-from-github/mingtaoli.github.io
HTML_DIR=/srv/06www.mingtaoli.cn/html

# 克隆或更新源码
if [ ! -d "$REPO_DIR" ]; then
    git clone git@github.com:mingtaoli/mingtaoli.github.io.git "$REPO_DIR"
fi

cd "$REPO_DIR"
git fetch origin
git reset --hard origin/main

# 构建静态站点
~/julia-1.10.5/bin/julia -e 'using Franklin; optimize(prepath="")'

# 部署到 nginx
rsync -av --delete "$REPO_DIR/__site/" "$HTML_DIR/"

echo "部署完成: $(date)"

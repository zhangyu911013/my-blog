import React from 'react';

import ReactMarkDown from 'react-markdown';

import  'github-markdown-css/github-markdown.css';
import './style.css';


export default class Detail extends React.Component {
  componentDidMount() {

  }
  render() {
    return(
      <div>
        <h1></h1>
        <div className="article-content markdown-body">
        <ReactMarkDown source={article}/>
        </div>
      </div>
    )
  }
}

const escapeBackTip = (source) => {
  source.replace(/`/g)
}

const article = `
1. 启动mysql \`\`mysql.server start\`\`
2. 进入数据库 \`\`mysql -u cfdev -p tongji2016\`\`
3. mysql的root密码 \`\`358841641\`\`
4. 备份数据库密码 \`\`scp cf-test@139.196.193.120:~/backup/cfdb_2017-03-07_06h25m.Tuesday.sql.gz ./\`\` \`\`Sjtu2016\`\`
3. 使用数据库 \`\`show databases;  use database XXXX\`\`
2. 和上个版本比对 \`\`git difftool\`\`
3. pub test \`\`npm run pub-local-test\`\`
4. 关掉进程 \`\`pm2 kill\`\`
5. 看进程 \`\`pm2 list\`\`
6. 重启nginx \`\`sudo nginx -s reload\`\`
7. 升级node版本 
8. \`\`ALL_PROXY=socks5://127.0.0.1:9001 brew upgrade\`\` homebrew用代理

\`\`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash\`\`

\`\`新开窗口：nvm install v6.10.0\`\`

\`\`rm -rf node_modules\`\`

12.git reabase 
\`\`git rebase -i --onto develop\`\`
rebase后别人通过\`\`git reset --hard origin/feature/coach-feedback\`\`到相应的base上

13.github设置shadowsocks代理

\`\`
git config --global http.proxy socks5://127.0.0.1:1080
\`\`

\`\`
git config --global https.proxy socks5://127.0.0.1:1080
\`\`

\`\`
git config --global --unset http.proxy
\`\`
\`\`
git config --global --unset https.proxy
\`\`

14. 正则匹配console.log
 \`\`console.log\([^,]*?\)\`\`

15.删除合并到develop的分支
\`\`git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d\`\`

16.上线流程
\`\`git co develop/master git pl\`\`

\`\`git merge develop --no-ff\`\`

\`\`git push\`\`

\`\`backup database\`\`


\`\`npm run pub-prod\`\`

\`\`run sql\`\`

\`\`git tag v1.32.0 -a && comment date and release note && git push origin v.1.32.0\`\`

\`\`move script to history && send email\`\`

17.hotfix流程

\`\`npm run hotfix + 分支名\`\`

\`\`打tag（要加一）\`\`

\`\`npm run post-hotfix + 分支名\`\`

18.docker中ubuntu安装软件加速方法

\`\`\`\`
RUN echo 'deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse' > /etc/apt/sources.list
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 40976EAF437D05B5 && \
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys

apt-get update && apt-get install -y libgtk2.0-0 libgconf-2-4 libasound2 libxtst6 libxss1 libnss3 xvfb
RUN Xvfb -ac -screen scrn 1280x2000x24 :9.0 & export DISPLAY=:9.0
\`\`\`\`

19.查看端口8003的进程 \`\`lsof -i:8003\`\`

20.homebrew走shadowsocks 
\`\`export ALL_PROXY=socks5://127.0.0.1:1080\`\`
`;
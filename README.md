# Public-Welfare---Searching-Engine

### 开发流程

1. 将master分支pull到本地，**创建自己的分支**进行代码改动

```shell
git checkout -b *** # 自己的分支名
```

2. 第一次pull下来请先配置数据库

```mysql
mysql.server start
mysql -u root -p

create database PWSE;
create user 'PWSE'@'localhost' identified by 'PWSE';
grant all privileges on PWSE.* to 'PWSE'@'localhost';
quit;
```

3. 开启虚拟环境

```shell
source venv/bin/activate
```

4. 安装依赖

```shell
pip3 install -r requirements.txt
```

​    如果提示超时错误的话尝试以下命令，使用镜像安装：

```shell
pip3 install -r requirements.txt -i http://pypi.douban.com/simple --trusted-host pypi.douban.com
```

5. 本地运行

```shell
python3 manage.py makemigrations 
python3 manage.py migrate
python3 manage.py runserver
```

6. 在本地进行改动，确认无误后merge到master分支（同时处理冲突）



……TOLIST：静态文件收集，暂时不用管…...
**一、fork仓库**

将想要修改的仓库fork到自己的仓库里

![image-20211227163335122](C:\Users\silk\AppData\Roaming\Typora\typora-user-images\image-20211227163335122.png)

点击后会复制这个项目在自己的GitHub上

**二、克隆项目**

git clone url(自己GitHub上此项目的地址)

然后用cd命令进入该项目目录（进入有.git 的目录）

**三、与源码仓库建立连接**

 git remote add upstream url (原作者的地址)

git remote -v 

使用git remote -v命令，可以看到除了自己的origin也有原作者的upstream

**四、创建分支brench**

 git checkout -b 自定义分支名

**五、本地改代码**

改好后可以用 git status 看看modified那些文件被修改了

**六、add修改的文件**

git add 文件/git add .

**七、提交到分支**

git commit -m”提交说明”

**八、将分支推动到仓库**

git push origin 分支名

**九、github查看**

登录github，在自己的远程仓库便能看刚才push上去的分支了，点击`New pull request`，`compare`处选择刚才提交上来的分支，点`Create pull request，`

写好名字，写好说明，提交。


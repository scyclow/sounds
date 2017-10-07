
cp -r `ls -a | egrep -v node_modules | egrep -v .git` $1

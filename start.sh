#!/bin/bash
###
 # @Author: Wangtao
 # @Date: 2024-01-03 18:17:46
 # @LastEditors: Wangtao
 # @LastEditTime: 2024-01-06 16:52:46
### 
echo '进来了'
python3 run.py 0.0.0.0 8080 &
cd /wxcloudrun-wxcomponent
./main


cd /node
pm2 start index.js

# start_server(){
#   if check_port 8083
#   then
#     echo "服务已经存在，无需启动"
#     exit1
#   else
#     exho "服务启动中"
#     pm2 start /node/index.js
#     echo "启动完毕"
#   fi    
# }
# start_server
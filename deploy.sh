#!/bin/sh

RTMOTE_IP=121.43.185.126

# ssh without password
ssh-copy-id root@$RTMOTE_IP

# save images
echo "save image: wedding-website-backend_backend"
docker save wedding-website-backend_backend:latest > wedding-website-backend_backend.tar
echo "save image: wedding-website-backend_web"
docker save wedding-website-backend_web:latest > wedding-website-backend_web.tar

# scp to remote host
echo "scp to remote host: $REMOTE_IP"
scp *.tar root@$RTMOTE_IP:~

# echo load
echo "docker load -i wedding-website-backend_backend.tar; docker load -i wedding-website-backend_web.tar"

# login
ssh root@$RTMOTE_IP





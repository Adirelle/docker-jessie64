echo "installing docker-compose"

wget -L https://github.com/docker/compose/releases/download/1.6.0/docker-compose-`uname -s`-`uname -m` \
    -O /usr/local/bin/docker-compose

chmod a+x /usr/local/bin/docker-compose

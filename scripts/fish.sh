echo "installing fish"

echo deb http://httpredir.debian.org/debian jessie-backports main >/etc/apt/sources.list.d/jessie-backports.list

apt-get update
apt-get -y install fish

echo "updating fish completions"

mkdir -p /etc/fish/completions
wget https://raw.github.com/barnybug/docker-fish-completion/master/docker.fish -O /etc/fish/completions/docker.fish

su - vagrant -c "/usr/bin/fish -c fish_update_completions"

echo "installing samba"

apt-get -y install samba

mkdir /home/vagrant/shared
chown vagrant:vagrant /home/vagrant/shared

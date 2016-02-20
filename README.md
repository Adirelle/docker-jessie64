# Docker-Jessie64 Packer templates

The templates here are used to create the Docker-Jessie64 Vagrant base box.

## Purppose

This box is intended for developpers running Windows who want to use Docker with a decent Unix
distribution. While [boot2docker](http://boot2docker.io/) is very light-weight Linux distribution,
it relies on the terribly slow vboxsf filesystem, provides a terrible user experience with the
shell and isn't easily customizable.

## Box content and configuration

This box contains:

* Virtualbox guest additions.
* Latest [docker-compose](https://docs.docker.com/compose/).
* Latest [Docker engine][https://docs.docker.com/engine/) from [Docker apt-repository](https://docs.docker.com/engine/installation/linux/debian/#update-your-apt-repository).
* The [fish shell](http://fishshell.com), with [docker completions](https://github.com/barnybug/docker-fish-completion).
* (To come) A [Samba](https://www.samba.org) server preconfigured to share /home/vagrant/shared.
* (To come) [Dockerui](https://github.com/crosbymichael/dockerui).

## Direct Download

	vagrant init Adirelle/docker-jessie64

## Credits

  Many thanks to [Mitchell Hashimoto](https://github.com/mitchellh/) for his awesome work on [Packer](https://github.com/mitchellh/packer) and [Vagrant](https://github.com/mitchellh/vagrant), [![Tech-Angels](http://media.tumblr.com/tumblr_m5ay3bQiER1qa44ov.png)](http://www.tech-angels.com)

# Criando REST API NODE JS

Criação de end points para serem consumidos em .jSON 

##  Instalação

##  Gerenciador de pacotes para Windows [CHOCOLATEY]
Executar o PowerShell do windows (alt + X) como admin, e instalar as ferrametas necessárias com os comandos abaixo:

* Chocolatey:
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Com o chocolatey instalado, o próximo passo é instalar:

##  NODE
```
choco install node
```

##  YARN
```
choco install yarn
```

Após a instalação você já estará apto a rodar o servidor em 
```
localhost:3333/projects
```

# Testando APIS com POSTMAN

Inicie a escuta do servidor:
```
yarn dev
```

Para instalar o postman 
```
choco install postman
```





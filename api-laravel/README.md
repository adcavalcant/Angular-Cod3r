* Para Iniciar o projeto:
1) git clone 

2) composer install para instalar as dependências (pasta /vendor)
3) "criar um arquivo .env a partir do .env.example". "Configurar nesse arquivo qual banco utilizar" (Criar um banco no postgres chamado 'sisg')
4) php artisan migrate para configurar os bancos...
5) php artisan key:generate para gerar a chave de segurança
6) php artisan kwt:secre para gerar o secret do jwt
5) php artisan serve

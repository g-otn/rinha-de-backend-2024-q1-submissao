# rinha-de-backend-2024-q1-submissao

This is the source code of the API from my submission to the "Rinha de Backend, Segunda Edição: 2024/Q1 - Controle de Concorrência" challenge/event.

Please read [zanfranceschi/rinha-de-backend-2024-q1](https://github.com/zanfranceschi/rinha-de-backend-2024-q1) for more information about the event.

## Load test report

# [CLICK HERE FOR THE REPORT](https://g-otn.github.io/rinha-de-backend-2024-q1-submissao/)


The load tests were made with Gatling, more information in the main repository. The html report is also available [there](https://github.com/zanfranceschi/rinha-de-backend-2024-q1/tree/main/resultados/g-otn/rinhabackendcrebitossimulation-20240311033820297).

See also:
- My submission info: [zanfranceschi/rinha-de-backend-2024-q1/tree/main/participantes/g-otn](https://github.com/zanfranceschi/rinha-de-backend-2024-q1/tree/main/participantes/g-otn)
- Event result table: [RESULTADOS.md](https://github.com/zanfranceschi/rinha-de-backend-2024-q1/blob/main/RESULTADOS.md)

## Running

You'll need to download the submission files (`docker-compose.yml`, `init.sql`, etc). 
You can find it in the main repo: [zanfranceschi/rinha-de-backend-2024-q1/tree/main/participantes/g-otn](https://github.com/zanfranceschi/rinha-de-backend-2024-q1/tree/main/participantes/g-otn)

[Subfolder download link](https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fzanfranceschi%2Frinha-de-backend-2024-q1%2Ftree%2Fmain%2Fparticipantes%2Fg-otn) (the main repo is heavy, this may be more convinient than cloning)

### Running the full submission
Requirements: Docker, Docker Compose

1. Navigate to that folder and use `docker compose up`, this will run the services locally as it was submitted.

### Running just this API
Requirements: Docker, Docker Compose, Node.js

1. Navigate to [my submission files](https://github.com/zanfranceschi/rinha-de-backend-2024-q1/tree/main/participantes/g-otn) you download, comment out the APIs and NGINX services.
This will run PostgreSQL and run the DB initialization script.
2. Clone this repository and navigate:
```bash
git clone https://github.com/g-otn/rinha-de-backend-2024-q1-submissao.git
cd rinha-de-backend-2024-q1-submissao
```
3. Install dependencies: `npm i`
4. Run the project: `npm start`

## Note
I started making this around 6 hours before the submission window closed. I submitted it around 25 minutes before it closed.
I was a bit sad because around 1/3 of the load test requests were failing by some obscure error and I wouldn't figure out why in time.
Apparently however in the event's environment it worked great. ¯\\\_(ツ)\_/¯
![image](https://github.com/g-otn/rinha-de-backend-2024-q1-submissao/assets/44736064/fbe4c1fd-e992-460c-ba7c-40cdd6971729)


## Acknowledgements
Thanks to [leluque](https://github.com/leluque) for notifying us that this event was happening.

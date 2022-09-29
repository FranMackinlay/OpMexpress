### Prerequisites

- node 14
- npm
- docker
- docker-compose

## Getting Started

This project needs docker and docker-compose to run it.

### Installation

1. Create your .env file and add the variables, with the variables needed to connect it to docker
   ```shell
   cp .env.example .env
   ```
2. Run services
   ```shell
   docker-compose -f docker-compose.yml -f docker-compose.yml up -d --build
   ```
3. Run `docker-compose up` to check if the app is running correctly.

To add a transaction use this payload on a post request to /transactions:

```
{
   date: String,
   amount: Number,
   action: 'deposit' | 'withdraw',
}
```

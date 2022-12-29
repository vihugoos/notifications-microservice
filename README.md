<div id="top"> </div>


<!---- PROJECT LOGO ----> 
<div align="center">
  <h2 align="center"> 
    Notifications - Microservice API 
  </h2>
  
  <p align="center">
    A microservice for sending notifications, developed with Node.js <br/>
    Explore <a href="https://nodejs.org/en/docs/">Node.js</a> docs &#187; <br/> <br/>
    <a href="https://github.com/vihugoos/notifications-microservice/issues"> Report Bug </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/notifications-microservice/issues"> Request Feature </a>
  </p>
</div>


<!---- TABLE OF CONTENTS ----> 
<details>
  <summary> Table of Contents </summary>
  <ol>
    <li>
      <a href="#about-the-project"> About The Project </a>
      <ul>
        <li><a href="#built-with"> Built With </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started"> Getting Started </a>
      <ul>
        <li><a href="#prerequisites"> Prerequisites </a></li>
        <li><a href="#installation"> Installation </a></li>
        <li><a href="#usage"> Usage </a></li>
        <li><a href="#tests"> Tests </a></li>
      </ul>
    </li>
    <li><a href="#contributing"> Contributing </a></li>
    <li><a href="#contact"> Contact </a></li>
  </ol>
</details>


<!---- THE PROJECT ---->
## About The Project 

<img src="" align="center" alt="Project Home Page">
A microservice for sending notifications, following SOLID principles. Receiving notifications by the service can be done via HTTP requests or through asynchronous messaging by a Kafka Producer. Some patterns like Data mapper, Factory method and DTO, were applied. The tests apply the in-memory database concept.


### Built With 

<div style="display: inline_block">
    <!-- Icon Node.js --> 
    <a href="https://nodejs.org/en/"> 
      <img align="center" alt="Icon-Node.js" height="33" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"> 
    </a> &nbsp;
    <!-- Icon TypeScript --> 
    <a href="https://www.typescriptlang.org/"> 
      <img align="center" alt="Icon-TypeScript" height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"> 
    </a> &nbsp;
    <!-- Icon Nest.js --> 
    <a href="https://nestjs.com/"> 
      <img align="center" alt="Icon-Nest.js" height="32" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"> 
    </a> &nbsp;
    <!-- Icon Prisma --> 
    <a href="https://www.prisma.io/"> 
      <img align="center" alt="Icon-Prisma" height="32" src="https://user-images.githubusercontent.com/44311634/178335052-08bb4b29-c4da-4100-ae71-8b65cf6cd581.png"> 
    </a> &nbsp;
    <!-- Icon Jest --> 
    <a href="https://jestjs.io/"> 
      <img align="center" alt="Icon-Jest" height="31" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"> 
    </a> &nbsp;
    <!-- Icon Docker -->
    <a href="https://www.docker.com/"> 
      <img align="center" alt="Icon-Docker" height="53" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"> 
    </a> &nbsp;
    <!-- Icon PostgreSQL --> 
    <a href="https://www.postgresql.org/"> 
      <img align="center" alt="Icon-PostgreSQL" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"> 
    </a> &nbsp;
    <!-- Icon Kafka --> 
    <a href="https://kafka.apache.org/"> 
      <img align="center" alt="Icon-Kafka" height="38" src="https://user-images.githubusercontent.com/44311634/209395332-4a1e1025-608f-4c1d-b9b9-87bae2f2cb96.png"> 
    </a> 
</div>

<br/>
<br/>


<!---- GETTING STARTED ----> 
## Getting Started

To get started, you need to have <strong>Node.js 18+</strong> installed on your machine, for more information visit <a href="https://nodejs.org/en/download/"> Node.js Downloads</a>. You will also need to have <strong>Docker</strong> installed, for more information visit <a href="https://docs.docker.com/engine/install/">Docker Engine Install</a>. 

<strong>Obs:</strong> This guide will only serve to run the project locally (development environment).


### Prerequisites 

Other than node.js and docker installed, before starting the installation, you need to create an account on <a href="https://console.upstash.com/">Uptash</a>, for soon we will create a Serverless Data for Kafka.


### Installation 

1. Clone the repo 
   ```bash
   git clone https://github.com/vihugoos/notifications-microservice.git
   ```
2. Inside the project root directory install all project dependencies 
   ```cmd
   npm install
   ```
3. Create an `.env` file with the database connection configuration  
   ```cmd
   echo "DATABASE_URL='postgresql://postgres:docker@localhost:5432/notifications?schema=public'" > .env 
   ```
4. Create a psql container docker 
   ```cmd
   docker run --name notifications_microservice -e POSTGRES_DB=notifications -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres 
   ```
4. Run the migrate 
   ```cmd
   npx prisma migrate dev
   ```


<!---- USAGE EXAMPLES ----> 
## Usage

With the installation complete, we can start the project.

* Starting the project 
   ```bash
   npm run start:dev  
   ```


<!---- TESTS SETUP ----> 
## Tests

To be able to run the tests, run the commands below:

* Just run all tests
   ```cmd
   npm run test
   ```
* Run all tests in watch mode  
   ```cmd
   npm run test:watch
   ```
* Test coverage 
   ```cmd
   npm run test:cov
   ```

<br/> <br/>


<!---- CONTRIBUTING ---->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br/> 


<!---- CONTACT ---->
## Contact

Developer @vihugoos - victorhugoos@live.com  

<p align="right"><a href="#top"> &#129045; back to top </a></p> 

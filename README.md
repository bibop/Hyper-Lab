# AI_HyperLab

AI_HyperLab is a state-of-the-art web application designed for the seamless management of AI projects utilizing the autogen architecture. This platform empowers users to dynamically create and manage specialized Autogen Agents through an intuitive and highly functional graphical user interface.

## Enhanced Key Features and Functionalities

* **Dynamic Creation of Specialized Autogen Agents:** Supports the dynamic creation of up to eight specialized agents per project, each with unique roles such as 'boss' or 'critic'.
* **AI-Generated Agent Images:** Facilitates the generation of visual representations for agents, enhancing user personalization.
* **RAG Functionality:** Equips agents with both Retrievable and Generative capabilities, enabling progressive learning and memory retention.
* **Persistent and Concurrent Interactions:** Ensures continuous and simultaneous interactions among agents, accommodating multiple sessions.
* **Graphical User Interface (GUI):** Displays agents in separate text boxes, showing the agent's name, specialization, and their AI-generated or user-uploaded image.
* **User Authentication and Real-Time Collaboration:** Provides different levels of access control and supports real-time collaboration capabilities.
* **Strict Adherence to Autogen Architecture:** Built exclusively on Autogen architecture, ensuring consistency and purity of the platform.
* **Responsive and Multilingual Design:** Guarantees a responsive design that caters to a global audience with multilingual support.
* **Performance Metrics and Documentation:** Aims to establish specific performance metrics for efficiency and user-friendliness, with a comprehensive user manual in English.

## Technologies Used

* Node.js
* Express
* MongoDB
* Mongoose
* jsonwebtoken
* Passport.js
* bcryptjs
* Socket.io
* React
* Redux
* axios
* Bootstrap
* HTML
* CSS3
* cron
* i18next
* TensorFlow.js
* sharp

## Documentation and Learning Resources

* **Autogen Architecture Overview:** Insights on the autogen architecture can be found on the [Microsoft Autogen Blog](https://example.com/autogen-overview).
* **Agent AutoBuild Example:** An example of agent autobuild is provided on the [Microsoft Autogen Blog - Agent AutoBuild](https://example.com/agent-autobuild).
* **Detailed Articles on Autogen:** Explore a series of detailed articles on Autogen at the [Microsoft Autogen Blog](https://example.com/articles).

## Project Structure

Project files and directories are organized as follows:

* `/package.json` - Contains metadata and dependencies for the project.
* `/index.js` - The entry point for the application that initializes the server.
* `/config` - Configuration files for database and authentication strategies.
* `/models` - Defines Mongoose schemas for the User, Project, and Agent models.
* `/routes` - Express route definitions for user, authentication, and API endpoints.
* `/middleware` - Middleware for error handling and authorization mechanisms.
* `/controllers` - Controllers handling the business logic for different routes.
* `/validators` - Express-validator middleware for input validation.
* `/ai` - AI modules for agent proposal and memory-enhancing functionalities.
* `/scripts` - Utility scripts for tasks like database connection checks.
* `/.env` - Environment configuration file storing sensitive default keys.

## Installation and Setup

1. Ensure MongoDB is running on your system.
2. Clone the repository and navigate to the project directory.
3. Install dependencies with:
   ```
   npm install
   ```
4. Start the application by running:
   ```
   npm start
   ```

## Configuration

Adjust the `.env` file in the project root with your environment variables:

* `MONGO_URI` - The MongoDB connection string.
* `PORT` - The port number on which the server should run.
* `JWT_SECRET` - Secret key for signing JSON Web Tokens.

For production, ensure to set these variables in a secure and appropriate manner.

## Usage

Refer to endpoint documentation provided in the `/routes` directory for details on using the API and managing AI projects with Autogen Agents.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

---

**Note:** This documentation is subject to change as the project evolves. It is recommended to regularly check this document for updates.
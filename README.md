# AI_HyperLab

AI_HyperLab is a revolutionary full-stack web application designed for the seamless management of AI projects. It embraces an autogen architecture to provide a collection of enhanced features for creating, training, and managing Autogen Agents.

## Features

- **Dynamic Specialized Autogen Agents**: Up to eight specialized agents can be dynamically spawned for each project, with distinct roles like 'boss' and 'critic'.
- **AI-Generated Agent Imagery**: Custom images for each agent are generated based upon their roles to add a personal touch.
- **RAG Functionality**: Agents have Retrievable and Generative capabilities for memory retention and incremental learning.
- **Persistent & Concurrent Interactions**: Continuous and concurrent interactions between agents across sessions.
- **GUI**: Intuitive graphical user interface showcasing agent details and images.
- **Authentication & Real-Time Collaboration**: Secure multi-user support with real-time collaboration features.
- **Autogen Architecture**: Strict utilization of Autogen architecture principles.
- **Responsive Multilingual Support**: Compatibility with various device sizes and multiple languages.
- **Performance Metrics & Documentation**: A forthcoming manual for optimal use and clarity on performance measures.

## Technology Stack

- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: jsonwebtoken, Passport.js, bcryptjs
- Real-time Communication: Socket.io
- Frontend: React, Redux, axios, Bootstrap
- Styling: HTML, CSS3
- Scheduling: cron
- Internationalization: i18next
- AI Processing: TensorFlow.js
- Image Processing: sharp

## Installation

Make sure to have Node.js and MongoDB installed on your system.

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the environment variables in `.env` file as per the example in `.env.example`
4. Start the application:
   ```sh
   npm start
   ```

## Usage

After starting the server, navigate to the provided local server URL, usually `http://localhost:PORT` where `PORT` is defined in your `.env` file.

## Documentation

For more information on using AI_HyperLab, refer to the in-depth user manual (to be provided).

## Autogen Resources

Refer to these articles and blog posts for more details on Autogen architecture and implementation:

- [Autogen Architecture Overview](https://autogen.microsoft.com/blog/overview)
- [Agent AutoBuild Example](https://autogen.microsoft.com/blog/agent-autobuild)
- [More Articles on Autogen](https://autogen.microsoft.com/blog/articles)

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the creators and contributors towards the development and maintenance of the Autogen framework and the associated technologies listed.

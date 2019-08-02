# BotifyChallengeJavaScript

# Step 1: Data Visualization 
Create a Single Page Application with only one view that shows a visualization of information regarding Near-Earth-Objects travelling around the earth. You will use the Data returned by the following API call: ​https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY 
This data can be added in your code locally, there is no need to fetch it from the API in step 1.
Display a non-Stacked Bar Chart, with 2 Bars for each Near Earth Object from the API representing their min and max estimated diameter, sorted by average estimated diameter descending. 

Scripts:
- script/release: upgrade project version (you may use npm facilities) 
- script/build​: create a production ready build of the project

Librarie:  
  You will use the following libraries, which are parts of the JS stack used at Botify: 
- Views and Components: ​React 
- Charts: ​Google Charts

Tips​:  
- You can (and probably should) use a ​starter kit to bootstrap your project. create-react-app​ is a good one to start from. 
- Split your code (actions, views, components, utils..) into different files and folders. 
- Feel free to use any additional libraries. We are always interested in new ideas

# Step 2 - Data Fetching
In a new branch, add remote data fetching to your visualization app.  
Use the same data as the one provided in Step 1, but fetch it in the browser when the application is launched

Tips​:  
- You must handle all of the different possible states and cases during the data fetching 
- You may use any UI framework you see fit to complete this step

# Step 3 - Data Modification
In a new branch, add a dropdown that allows users to change the shown data on your visualization app. This modifier will allow the user to choose to only display NEOs that are orbiting a certain orbital body.
The dropdown should allow the user to select one orbital body name - if an orbital body is selected the chart should only display NEOs that are currently orbiting the selected body

Tips​:  
- You will not be judged on the style of the dropdown, only its usability 
- You may use any UI framework you see fit to complete this step 

# Step 4: Application Server
Create a basic web server exposing 3 routes: 
- GET / ​: serves the main page (SPA) 
- POST /api/modifiers/:modifierId​: saves a user-selected modifier to the database 
- GET /api/modifiers​: returns all saved modifiers in a JSON format
Modify your front-end SPA so it initializes correctly by fetching the saved modifier data from your API.

Scripts​: The project should add at least 2 scripts: 
- script/install​: Install all dependencies needed 
- script/run​: Start the app, frontend app can be accessed on​ localhost:8000 ​ .

Libraries​: Feel free to use any Javascript technologies. Either for:  
- the web framework (express, koa, hapi, loopback, nodal, ...) 
- the DBO/ORM (sequelize, waterline, …) 
- Other components 

# [BONUS] Step 5: Dockerfile
Do not start this step unless you have a complete and polished result for all other steps and only if you have time remaining on the 4-hour allowance. Candidates will not be penalized for a lack of answer on this step
Create a Dockerfile that runs your project server. 

Scripts​: 
The project should amend the ​script/run ​script so it uses the Dockerfile 

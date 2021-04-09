const TeamHtml = [];

function generateTeamHtml(manager, engineers, interns) {
    TeamHtml.push(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
    <nav class="navbar mb-5 navbar-light bg-danger">
        <div class="container-fluid">
            <span class="navbar-brand mx-auto text-light"><h1>My Team</h1></span>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div id="cards-div" class="col-md-12 card-columns d-flex justify-content-around">
                <div class="card float-start" style="width: 18rem;">
            <div class ="card-header bg-primary text-white">
            <h5 class="card-title">${manager.name}</h5>
            <i class="fa fa-coffee"></i>
            Manager
        </div>
            <div class="card-body">
            <p class="card-text">ID:${manager.id}</p>
            <p>Email:  <a class="underline" href="${manager.email}">${manager.email}</a></p>
            <p class="card-text">Office Number: ${manager.officeNumber}</p>
        </div>
        </div>
    `);

    engineers.forEach(engineer => {
        var engineerHtml =
        `<div class="card float-start" style="width: 18rem;">

            <div class ="card-header bg-primary text-white">
            <h5 class="card-title">${engineer.name}</h5>
            <i class="fa fa-lightbulb"></i>
            Engineer
            </div>
            <div class="card-body">
            <p class="card-text">ID: ${engineer.id}</p>
            <p>Email: <a class="underline" href="${engineer.email}">${engineer.email}</a></p>
            <p class="card-text">Github: <a class="underline" href="https://github.com/${engineer.github}" target="_blank" alt="GitHub link" class="text-light">${engineer.github}</a></p>
        </div>
        </div>`;
        TeamHtml.push(engineerHtml);
    });

   interns.forEach(intern => {
       var internHtml =
       `<div class="card float-start" style="width: 18rem;">
       <div class ="card-header bg-primary text-white">
       <h5 class="card-title">${intern.name}</h5>
       <i class="fa fa-university"></i>
       Intern
       </div>
       <div class="card-body">
       <p class="card-text">ID: ${intern.id}</p>
       <p>Email: <a class="underline" href="${intern.email}">${intern.email}</a></p>
       <p class="card-text">School:${intern.school}</p>
    </div>
    </div>
   </div>
   </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</body>

</html>`;
TeamHtml.push(internHtml);
   });
   return (TeamHtml.join(""))
};

module.exports = generateTeamHtml;




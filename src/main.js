import './style.css';
const accueil = "./main.js"
const pilote = "./dstanding.js"
const constructeur = "./cstanding.js"

function App() {
  return (
    <div className="Website">
      <head>
        <title>Hollow Racing League</title>
      </head>

      <body> 
        <header class="header">
          <h1 class="page-name">Hollow Racing League</h1>
          <nav class="nav"> 
          <li class="nav-button"><a href={accueil}>Accueil</a></li>
          <li class="nav-button"><a href={pilote}>Classement pilote</a></li>
          <li class="nav-button"><a href={constructeur}>Classement constructeur</a></li>
          </nav>
        </header>

        <div class="page">
          <div class="presentation">
            <h1> Présentation</h1>
            <p>ejhfuiehgyiuheruygeuytgtyu</p>

          </div>

        </div>

        <footer class="footer">
        </footer>
      </body>

    </div>
  );
}

export default App;

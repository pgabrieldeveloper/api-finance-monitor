<h1>api-finance-monitor</h1 >
<p>simple api for wallet app</p>
<p>Link da para api em prodrução no heroku <a href="https://pure-caverns-91083.herokuapp.com/">Clique aqui !</a>
<hr>
<h2>Funcionalidades: </h2>
<ul>
    <li>
        <p>1- Criar uma conta | <a href="#func1"><i>ver detalhes</i></a> </p>
    </li>
    <li><p>2- Criar uma carteira ligada uma conta | <a href="#func2"> <i>ver detalhes</i> </a> </p></li>
        <li>
            <p>3- Criar um ganho ligado a uma carteira | <a href="#func3"><i>ver detalhes</i></a> </p>
        </li>
        <li>
            <p>4- Criat um gasto ligado a uma carteira | <a href="#func4"><i>ver detalhes</i></a ></p>
        </li>
</ul>
<hr>
<h2>
    Como Utilizar
</h2>
    <p>Rotas da api</p>
    <ul>
    <a href="#user">
        <li>user</li>
    </a>
        <a href="#user">
            <li>wallet</li>
        </a>
        <a href="#user">
            <li>gain</li>
        </a>
        <a href="#user">
            <li>spent</li>
        </a>
    </ul>
<p>Rotas de usuarios</p>
<hr>
<div id="user">
    <ul>
        <b>Rota: "URI/user"</b>
        <li>POST: são passados via body name, email e password para criação de uma conta</li><br>
        <b>Rota: "URI/user/login</b>
        <li>POST: são passados via body email e password para authenticação via jtw</li><br>
        <b>Rota: "URI/user/wallet"</b>
        <li>POST: devidamente logado, são passados via body balance para criação da carteira</li><br>
    </ul>
</div>
<p>Rotas da carteira</p>
<hr>
<div id="wallet">
    <ul>
        <b>Rota: "URI/wallet"</b>
        <li>GET: Com a conta ja criada é devidamente logado obtem os dados da carteira</li><br>
    </ul>
</div>
<p>Rotas da Ganhos</p>
<hr>
<div id="gain">
    <ul>
        <b>Rota: "URI/gain"</b>
        <li>POST: Com a conta ja criada é devidamente logado essa rota permite adicionar dinheiro a carteira</li><br>
    </ul>
</div>
<p>Rotas da Gastos</p>
<hr>
<div id="spent">
    <ul>
        <b>Rota: "URI/spent"</b>
        <li>POST: Com a conta ja criada é devidamente logado essa rota permite adicionar gastos a carteira </li><br>
    </ul>
</div>
<b>Detalhes Funcionalidade 1</b>
<hr>
<div id="func1">
    <ul>
        <li>
            <p>Criar uma carteira, um usuario so pode ter uma carteira</p>
        </li>
        <li>
            <p>Umar carteira esta ligada a um unico usuario</p>
        </li>
    </ul>
</div>
<b>Detalhes Funcionalidade 2</b>
<hr>
<div id="func2">
    <ul>
        <li>
            <p>Como nos detalhes da Funcionalidade 1 umar carteira pertence a um usuario assin como um usuario so pertence a uma carterira</p>
        </li>
        <li>
            <p>Estabelecendo assim uma relação OneToOne</p>
        </li>
    </ul>
</div>
<b>Detalhes Funcionalidade 3</b>
<hr>
<div id="func3">
    <ul>
        <li>
            <p>Umar carteira contem varios ganhos porém, um ganho so pertece a uma unica carteira</p>
        </li>
        <li>
            <p>Estabelecendo assim uma relação ManyToOne (muitos ganhos para uma unica carteira)</p>
        </li>
    </ul>
</div>
<b>Detalhes Funcionalidade 4</b>
<hr>
<div id="func4">
    <ul>
        <li>
            <p>Umar carteira contem varios gatos, porém um gasto so pertece a uma unica carteira</p>
        </li>
        <li>
            <p>Estabelecendo assim uma relação ManyToOne (muitos gastos para uma unica carteira)</p>
        </li>
    </ul>
</div>

var btn1 = document.getElementById('BtnStart');
var tudo = document.getElementById('all');
var tudo = document.getElementById('resultend');
var acertos = document.getElementById('result');
var div = document.getElementById('quests');
var p = document.getElementById('pergunta');
var num = document.getElementById('numq');
var mi2 = document.getElementById('min2');
var mi3 = document.getElementById('min3');
var mi5 = document.getElementById('min5');
var divescolha = document.getElementById('escolhadiv');
var nomePergunta = ['Qual a capital da França?','Quem escreveu a obra "Dom Quixote"?','Qual é o maior planeta do nosso sistema solar?','Qual é o rio mais extenso do mundo?','Qual é a moeda oficial do Japão?','Quem pintou a famosa obra "Mona Lisa"?','Qual o maior oceano do mundo?','Qual é o país com a maior população do mundo?','Quem foi o primeiro homem a pisar na Lua?','Qual é a maior cadeia montanhosa do mundo?','Qual foi o primeiro clube a conquistar a taça libertadores?','Qual foi o primeiro clube a conquistar a Champions League?','Qual o primeiro clube BRASILEIRO a conquistar a libertadores?','Qual o maior clássico do mundo?','O Rei Pelé é o jogador com mais copas do mundo em toda a história do futebol (3), em quais anos elee conquistou essas copas?','Qual foi a seleção campeã da última copa do mundo (2022)?','Quem tem mais vitórias no Derby Paulista?','Qual desses times NUNCA venceu o Corinthians na Neo Química Arena?','Quais os times BRASILEIROS com mais libertadores?','Qual time com mais rebaixamentos no campeonato brasileiro?','Qual país sediou a Copa do Mundo de 2018?','Qual foi o período em que o Brasil foi uma colônia de Portugal?','Qual fisiculturista é conhecido como "O Símbolo Sexual do Fisiculturismo" e foi um dos ícones do esporte nos anos 1970 e 1980?','Qual competição é considerada a mais prestigiosa no fisiculturismo profissional?','Qual jogador é frequentemente chamado de "O Rei" do futebol?','Qual desses times é conhecido como "merengues"?','Qual é o torneio de seleções mais antigo do mundo?','Quem detém o recorde de maior número de pontos marcados em um único torneio de vôlei feminino,com 251 pontos?','Quantas jogadoras de cada equipe estão em quadra simultaneamente durante um jogo de vôlei feminino?','Qaul é o valor de Log²(16)?'];
var alt1 = ['Londres','William Shakespeare','Terra','Nilo','Dólar','Vicent van Gogh','Atlântico','Brasil','Buzz Aldrin','Andes','Santos','Olympique de Marselha','Palmeiras','Derby Paulista','1998,2014,2018','Argentina','Palmeiras (144),Corinthians (98)','Palmeiras','Corinthians, Vasco, Grêmio, Flamengo e Fluminense','Vasco da Gama','França','Século XVII','Arnold Schwarzenegger','Arnold Classic','Cristiano Ronaldo','Barcelona','Copa do Mundo FIFA','Zhu Ting (China)','4','2'];
var alt2 = ['Paris','Miguel de Cervantes','Júpiter','Amazonas','Iene','Leonardo da Vinci','Índico','Índia','Neil Armstrong','Alpes','Independiente','Real Madrid','São Paulo','El Clássico','1958,1962,1970','Marrocos','Corinthians (122),Palmeiras (100)','Santos','Corinthians, Athletico Paranaense, Atlético Mineiro, Bragantino e Botafogo','América MG','Alemanha','Século XVIII','Ronnie Coleman','Mr.Olympia','Messi','Real Madrid','Copa América','Sheila Castro (Brasil)','5','3'];
var alt3 = ['Berlim','Victor Hugo','Saturno','Mississipi','Euro','Pablo Picasso','Pacífico','China','Yuri Gagarin','Himalaias','Penãrol','Juventus','Athletico Paranaense','Grenal','1958,1970,2002','França','Corinthians (80),Palmeiras (80) - Empate','São Paulo','Santos, São Paulo, Palmeiras, Corinthians e Internacional','Internacional','Rússia','Século XIX','Dorian Yates','Mr.Universe','Pelé','Bayern München','Eurocopa','Kim Yeon-Koung (Coreia do Sul)','6','4'];
var alt4 = ['Roma','Franz Kafka','Marte','Yangtzé','Libra','Salvador Dalí','Ártico','Estados Unidos','John F. Kennedy','Montanhas Rochosas','Boca Juniors','Arsenal','Santos','Derby della Madonnina','1994,2002,2006','Uruguai','Palmeiras (134),Corinthians (129)','Bragantino','Palmeiras, Santos, São Paulo, Grêmio e Flamengo','Botafogo','Brasil','Século XVI','Jay Cutler','world Bodybuilding Championship','Maradona','Juventus','Copa das Nações Africanas','Nataliya Goncharova (Rússia)','7','5'];
const q = ['Questão 1','Questão 2','Questão 3','Questão 4','Questão 5','Questão 6','Questão 7','Questão 8','Questão 9','Questão 10','Questão 11','Questão 12','Questão 13','Questão 14','Questão 15','Questão 16','Questão 17','Questão 18','Questão 19','Questão 20','Questão 21','Questão 22','Questão 23','Questão 24','Questão 25','Questão 26','Questão 27','Questão 28','Questão 29','Questão 30'];
var qualquer = -1
const cq = ['02','02','02','01','02','02','03','03','02','03','03','02','04','02','02','01','04','03','04','02','03','04','01','02','03','02','02','01','03','03']	
var certas = 0
var temporizadordiv = document.getElementById('temporizador');
var t = 0
var clickada = [] 

function Start(){
	if (t != 0){
		cc = confirm("Deseja realmente começar?")
		if (cc ==true){
			alert(q.length + " questões")
			setTimeout(function() {btn1.style.cssText = 'display: none'
		divescolha.style.cssText = 'display: none'
		div.style.cssText = 'display: block'
		num.style.cssText = 'display: block';
		exit.style.cssText = 'display: none'; proxima()},1000)
		timer(t)
		}

	}else{
		alert("Selecione algum tempo para poder começar o quiz!!")
		/*document.location.reload(true);*/
	}
}

var quiz = document.querySelectorAll('#quests li');
quiz.forEach(quiz => {
	quiz.addEventListener('click',() => {	
		const c = confirm("Deseja confirmar essa questão?")
		if (c == true){
		 clickada[qualquer] = quiz.id 	
		validacao(quiz.id,quiz)
	}
	});
});

function proxima(){
	if (qualquer === q.length - 1){ 
		End()
	}
	else{
		qualquer++
		num.innerHTML = q[qualquer]
		p.innerHTML = nomePergunta[qualquer]
		quiz.forEach(quiz => {
			if(quiz.id == "01"){			
			quiz.innerHTML = alt1[qualquer]
			}
			if(quiz.id == "02"){			
			quiz.innerHTML = alt2[qualquer]
			}
			if(quiz.id == "03"){			
			quiz.innerHTML = alt3[qualquer]
			}
			if(quiz.id == "04"){			
			quiz.innerHTML = alt4[qualquer]
			}	
		});	
	
	}					
}

function validacao(alter,click){
	if (alter == cq[qualquer]){
		click.classList.add('certa')
		certas++
		setTimeout(function(){click.classList.remove('certa');proxima()},1500)
		
	}

	else{
		click.classList.add('errada')
		setTimeout(function(){click.classList.remove('errada');proxima()},1500)
	
	}
}

function min2(){
		if (mi2.checked = true){
			mi3.checked = 0
			mi5.checked = 0
			t = 2
			q.length = 10
		}
}

function min3(){
		if (mi3.checked = true){
			mi2.checked = 0
			mi5.checked = 0
			t = 3
			q.length = 15	
		}
}

function min5(){
		if (mi5.checked = true){
			mi2.checked = 0
			mi3.checked = 0
			t = 5
		}
}

var sla
function startTimer(duration,display){
var temporizadordiv = document.getElementById('temporizador');	
var timer = duration,minutes,seconds;
		

	sla = setInterval(function(){

		minutes = parseInt(timer/ 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.innerHTML = minutes + ":" + seconds;
		if (timer == 0){
			clearInterval(sla)
			setTimeout(function(){alert("Seu tempo acabou!!");End()},200)
		}
		else{
			timer--
		}
		if (timer <= 30){
			temporizadordiv.style.cssText = 'transition: 0.5s; background: darkorange; color: white'	
		
			if (timer <= 10){
				temporizadordiv.style.cssText = 'transition: 0.5s; background: red; color: white'	
			}
		} 
	}, 1000);
}
 function timer(temp){

		var duration = 60 * temp;

		

		startTimer(duration,document.querySelector('#tmp'));
};
function End(){
	all.style.cssText = 'display: none;'
	setTimeout(function(){resultend.style.cssText = 'display: block';},2000)
	if (qualquer != q.length - 1){
		acertos.innerHTML = `Usuário não terminou todas as questões e respondeu apenas ${clickada.length} delas. <br><br> Acertando ${certas} de ${q.length}.`  
	}else{
		acertos.innerHTML = "Sua pontuação foi "+ certas +" de " + q.length + " questões."
	}
}

document.getElementById('BtnReset').addEventListener('click',() => {	
		document.location.reload(true);
	});

var sair = document.getElementById('exit');
	exit.addEventListener('click',() => {	
		const btnexit = confirm("Confirmar Logout?")
		if (btnexit == true){
		localStorage.clear()
		 window.location =("../index.html")
	}
	});
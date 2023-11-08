$.ajax({
    cache: true,
});


// carregamento assíncrono CSS.
(function($){
    $.getStylesheet = function(href){
        var $d= $.Deferred();
        var $link = $("<link />", {
            rel: 'stylesheet',
            type: 'text/css',
            href: href
        }).appendTo("head");
        $d.resolve($link);
        return $d.promise();
    }
})(jQuery);


// carregamento aassíncrono das bibliotecas.
$.when(
    // carregamento CSS.
    $.getStylesheet("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"),

    // carregamento JS.
    $.getScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"),
).done(function(){

    console.log("### SCRIPT LOAD ###");
    

    //exibir notas dos alunos.
    {
        console.log("aqui");
        var form = $("form#notes");

        //média das notas
        var phraseOne = $("#PhraseOne h3"); 

        // nome do aluno exibindo em tela
        var phraseTwo = $("#PhraseTwo h3");

        $(form).on("submit", (e) => {
            e.preventDefault();
        
            //pegar valor do nome no formulário
            const nameStudent = $("#floatingName").val();

            //pegar valor das notas 1 e 2
            const noteOne = Number($("#floatingNotesOne").val());
            const noteTwo = Number($("#floatingNotesTwo").val());

            //dividir o valor das notas
            const notesTotal = (noteOne + noteTwo) / 2;
            console.log("notas: " + notesTotal);

            $(phraseOne).html(`Média das Notas ${notesTotal.toFixed(2)}`)

            //fazer condição de aprovado ou não.
            if(notesTotal >= 7){
                $(phraseTwo).html(`Parabéns ${nameStudent}! Você foi aprovado(a).`).addClass("text-success")
            }else if(notesTotal >= 4){
                $(phraseTwo).html(`Atenção ${nameStudent}! Você está em exame.`).addClass("text-warning")
            }else{
                $(phraseTwo).html(`Ops ${nameStudent}... Você foi reprovado.`).addClass("text-danger")
            }
        });
    }
    
});
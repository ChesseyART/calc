$ = jQuery;

$(document).ready(function () {
    let regEx = new RegExp ("[\n]|[,]|[ ]");

    let services = {
        'postavit-svechku': [
            {
                'label': 'За здравие, 145 мм (время горения 30 минут)',
                'cost': 200,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'За здравие, 165 мм (время горения 50 минут)',
                'cost': 250,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'За здравие, 210 мм (время горения 90 минут)',
                'cost': 300,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'За упокой, 145 мм (время горения 30 минут)',
                'cost': 200,
                'blank': '/resources/assets/img/bad.jpg',
            },


            {
                'label': 'За упокой, 165 мм (время горения 50 минут)',
                'cost': 250,
                'blank': '/resources/assets/img/bad.jpg',
            },
            {
                'label': 'За упокой, 210 мм (время горения 90 минут)',
                'cost': 300,
                'blank': '/resources/assets/img/bad.jpg',
            },
            {
                'label': 'За учёбу и экзамен, 145 мм (время горения 30 минут)',
                'cost': 200,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'За учёбу и экзамен, 165 мм (время горения 50 минут)',
                'cost': 250,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'За учёбу и экзамен, 210 мм (время горения 90 минут)',
                'cost': 300,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'На удачу и благополучие, 145 мм (время горения 30 минут)',
                'cost': 200,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'На удачу и благополучие, 165 мм (время горения 50 минут)',
                'cost': 250,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'На удачу и благополучие, 210 мм (время горения 90 минут)',
                'cost': 300,
                'blank': '/resources/assets/img/good.jpg',
            },
        ],
        'sorokoust': [
            {
                'label': 'За здравие',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'За упокой',
                'cost': 400,
                'blank': '/resources/assets/img/bad.jpg',
            },
        ],
        'moleben': [
            {
                'label': 'Молебен о здравии',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен о упокоении',
                'cost': 400,
                'blank': '/resources/assets/img/bad.jpg',
            },
            {
                'label': 'Благодарственный молебен',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен о путешевствующих',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен об успехе в делах',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен о болящих',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен о благополучной беременности и родах',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен всем Святым',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен врачу душ и телес',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен о замужестве',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен о прибавлении ума',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен о прощении грехов',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен о работе',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен о страждущих винопитием',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен об умножении любви',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен от проклятия рода до 12 колена',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен от сглаза и порчи',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Молебен перед операцией',
                'cost': 400,
                'blank': '/resources/assets/img/good.jpg',
            },
        ],
        'neusypaemaya-psaltir': [
            {
                'label': 'Чтение 1 месяц за здравие',
                'cost': 900,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Чтение 6 месяцев за здравие',
                'cost': 1800,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Чтение 1 год за здравие',
                'cost': 3000,
                'blank': '/resources/assets/img/good.jpg',
            },
            {
                'label': 'Чтение 1 месяц за упокой',
                'cost': 900,
                'blank': '/resources/assets/img/bad.jpg',
            },
            {
                'label': 'Чтение 6 месяцев за упокой',
                'cost': 1800,
                'blank': '/resources/assets/img/bad.jpg',
            },
            {
                'label': 'Чтение 1 год за упокой',
                'cost': 3000,
                'blank': '/resources/assets/img/bad.jpg',
            },
        ],
        'panihida': [
            {
                'label': 'Об упокоении',
                'cost': 300,
                'blank': '/resources/assets/img/bad.jpg',
            },
        ],
        'cerkovnoe-pominovenie': [
            {
                'label': 'Чтение 1 месяц за здравие',
                'cost': 500,
                'blank': '/resources/assets/img/good.jpg',
            },
                        {
                'label': 'Чтение 6 месяцев за здравие',
                'cost': 1500,
                'blank': '/resources/assets/img/good.jpg',
            },
                        {
                'label': 'Чтение 1 год за здравие',
                'cost': 3000,
                            'blank': '/resources/assets/img/good.jpg',
            },
                        {
                'label': 'Чтение 1 месяц за упокой',
                'cost': 500,
                'blank': '/resources/assets/img/bad.jpg',
            },
                        {
                'label': 'Чтение 6 месяцев за упокой',
                'cost': 1500,
                            'blank': '/resources/assets/img/good.jpg',
            },
                        {
                'label': 'Чтение 1 год за упокой',
                'cost': 3000,
                'blank': '/resources/assets/img/bad.jpg',
            },

        ],
    }

    let cost =0;
    let count =1;
    let names='';
    let service= null;
    let option = null;
    
    $('select[name="treba"]').change(selectService);
    $('select[name="treba_type]').change(selectOption);
    $('select[name="church_count]').change(selectChurchCount);
    $('select[name="acceptance]').change(recalc);
    $('select[name="email]').on('input',recalc);
    
    init();

    function init() {
        selectService();
        selectOption();
        names= ' ';

        $('#name_list').find('li').remove();

        for (let i = 0; i < names.length; i++) {
            $('#name_list').append('<li>' + names[i] + '</li>');
        }
        
        $('#handle_church_count').multiSelect({
            'noneText':'Выбрать храм',
        });

        toggleChurchSelector();
    }

    function selectService(e) {
        cost =0;

        $('#calculator_cost').text(cost * count);
        $('#calculator_price').val(cost * count);

        let serviceKey = $( "#treba option:selected" ).attr('data-service-key');
        let serviceLabel = $( "#treba option:selected" ).val();
        service = serviceLabel;
        $('#treba_blank_label').text(serviceLabel);

        fillSelect('#treba_type',services[serviceKey]);
        selectOption();
        recalc();
    }
    
    function selectOption(e) {
        cost = $( "#treba_type option:selected" ).attr('data-cost');
        let img = $( "#treba_type option:selected" ).attr('data-img');
        option = $( "#treba_type option:selected" ).val();
        
        if(img === '/resources/assets/img/bad.jpg'){
            $('.calculator-form-blank').addClass('calculator-form-dark');
        }
        else {
            $('.calculator-form-blank').removeClass('calculator-form-dark');
        }
        $('#calculator_cost').text(cost * count);
        $('#calculator_price').val(cost * count);
        $('#calculator_form_blank_img').attr('src',img );
        recalc();
    }
    
    function selectChurchCount(e) {
        count = $("#church_count option:selected").attr('data-mlt');

        $('#calculator_cost').text(cost * count);
        $('#calculator_price').val(cost * count);
        recalc();
    }
    
    function fillSelect(selector, options) {
        $(selector).find('option').remove()
        
        let selected ='';
        
        for (let i = 0; i < options.length; i++) {
            
            if(i==0){
                selected ='selected';
            }
            
            $(selector).append('<option '+selected+' data-img="' + options[i]['blank'] + '"  data-cost="' + options[i]['cost'] + '" value="' + options[i]['label'] + '">' + options[i]['label'] + '</optiondata-img>');
            selected='';
        }
    }

    $('#names').keyup(inputNames);

    function inputNames(e) {
        names= $('#names').val().split(regEx);

        $('#name_list').find('li').remove();

        for (let i = 0; i < names.length; i++) {
            $('#name_list').append('<li>' + names[i] + '</li>');
        }
    }

    function recalc() {
        $('#calculator_error').text('');
        let data= {
            price:cost* count,
            description:service,
            acceptance:$('#acceptance').is(":checked"),
            email:$('#email').val()
        };
       
        $.ajax({
			url: 'https://trebi-zapiski-online.ru/ajax.php',
			type: 'POST',
			data: data,
			success: function( response ) {
			    $('#response_container').html(response);
			},
			error: function( data ) {
			    $('#calculator_error').text(data.responseText);
			    $('#submit_button').prop('disabled', true);
			    
				console.log(data.responseText);
			}
		});
    }
    
    function toggleChurchSelector(){
        if($('#toggle_church_count').is(':checked')){
            $('#church_count').hide();
            $('#handle_church_count_wrapper').show();
            
            count = $("#handle_church_count_wrapper input:checked").length;
            count = count===0?1:count;
            $('#calculator_cost').text(cost * count);
            $('#calculator_price').val(cost * count);
            recalc();
        }
        else{
            $('#church_count').show();
            $('#handle_church_count_wrapper').hide();
            selectChurchCount();
        }
    }
    
    $('#toggle_church_count').click(function(){
        toggleChurchSelector();
    });
    
    
    $('#handle_church_count_wrapper input[type="checkbox"]').click(function(){
        count = $("#handle_church_count_wrapper input:checked").length;
        count = count===0?1:count;
        $('#calculator_cost').text(cost * count);
        $('#calculator_price').val(cost * count);
        recalc();
    });
    
    $('.multi-select-button').click(function(){
        if(!$(this).parent().hasClass('multi-select-container--active')){
            $(this).parent().addClass('multi-select-container--active');
        }
        else{
            $(this).parent().removeClass('multi-select-container--active');
        }
    });
});

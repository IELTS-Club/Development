setTimeout(function(){

    document.querySelector('.container-panel-dashboard').style.filter = 'blur(5px)';
     document.querySelector('#newFeaturesModal').style.display = 'flex';

    }, 5000);


    document.querySelector('#newFeatureModalClose').addEventListener('click', ()=> {

        document.querySelector('.container-panel-dashboard').style.filter = 'blur(0)';
        document.querySelector('#newFeaturesModal').style.display = 'none';


    })

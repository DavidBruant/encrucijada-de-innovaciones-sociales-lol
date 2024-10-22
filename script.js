
const provincesEspagnoles = new Map([
    ['ES-A', 'alicante'],
    ['ES-AB', 'albacete'],
    ['ES-AL', 'almeria'],
    ['ES-AV', 'avila'],
    ['ES-B', 'barcelona'],
    ['ES-BA', 'badajoz'],
    ['ES-BI', 'vizcaya'],
    ['ES-BU', 'burgos'],
    ['ES-C', 'la-coruna'],
    ['ES-CA', 'cadiz'],
    ['ES-CC', 'caceres'],
    ['ES-CO', 'cordoba'],
    ['ES-CR', 'ciudad-real'],
    ['ES-CS', 'castellon'],
    ['ES-CU', 'cuenca'],
    ['ES-GC', 'las-palmas'],
    ['ES-GI', 'girona'],
    ['ES-GR', 'granada'],
    ['ES-GU', 'guadalajara'],
    ['ES-H', 'huelva'],
    ['ES-HU', 'huesca'],
    ['ES-J', 'jaen'],
    ['ES-L', 'lleida'],
    ['ES-LE', 'leon'],
    ['ES-LO', 'la-rioja'],
    ['ES-LU', 'lugo'],
    ['ES-M', 'madrid'],
    ['ES-MA', 'malaga'],
    ['ES-ML', 'melilla'],
    ['ES-MU', 'murcia'],
    ['ES-NA', 'navarra'],
    ['ES-O', 'asturias'],
    ['ES-OR', 'ourense'],
    ['ES-P', 'palencia'],
    ['ES-PM', 'baleares'],
    ['ES-PO', 'pontevedra'],
    ['ES-S', 'cantabria'],
    ['ES-SA', 'salamanca'],
    ['ES-SE', 'sevilla'],
    ['ES-SG', 'segovia'],
    ['ES-SO', 'soria'],
    ['ES-SS', 'guipuzcoa'],
    ['ES-T', 'tarragona'],
    ['ES-TE', 'teruel'],
    ['ES-TF', 'santa-cruz-de-tenerife'],
    ['ES-TO', 'toledo'],
    ['ES-V', 'valencia'],
    ['ES-VA', 'valladolid'],
    ['ES-VI', 'alava'],
    ['ES-Z', 'zaragoza'],
    ['ES-ZA', 'zamora']
]);

const paths = document.querySelectorAll('path')

const urlPrefix = 'https://mon-blog/'

for(const path of paths){
    path.addEventListener('click', e => {
        const provinceCode = e.target.id
        const province = provincesEspagnoles.get(provinceCode)

        console.log('province', province)

        location.assign(`${urlPrefix}${province}`)
    })
}
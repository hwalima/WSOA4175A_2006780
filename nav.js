
const navItems = [  
 
    { href: './index.html', text: 'Home'},
        { href: './internetArt.html', text: 'Internet Art'},
    { href: './blogs.html', text: 'Blogs'},
    { href: './mainPages/contact.html', text: 'Contact' },   

];

window.addEventListener('DOMContentLoaded', (event) => {
    rendeMenu();
});

// create elements

const navElem = document.createElement("nav");
navElem.className = "menu";
const navList = document.createElement("ol");


//run the Rendermenu function
const rendeMenu = () => {
    const pathPrefix=window.location.pathname==="/WSOA4175A_2006780/"?'.':'..'
    const navBar = document.querySelector(".menu-item");

    for (let i = 0; i < navItems.length; i++) {

        let navItem = document.createElement("li");
        navItem.className = "menu-item";
        let navLink = document.createElement("a");
        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;
        navItem.appendChild(navLink);


        //if subitems exists , then render them.
        let subItems = navItems[i].subItems;

        if (!!subItems && !!subItems.length) { 
            let subList = document.createElement("ol");
            subItems.forEach(subItem => {
                let subnavItem = document.createElement("li");
                let subnavLink = document.createElement("a");
                subnavItem.className = "menu-item";
                subList.className = "sub-menu";
               
                subnavLink.href = subItem.href;
                subnavLink.innerHTML = subItem.text;
                subnavItem.appendChild(subnavLink);
                subList.appendChild(subnavItem);
            });

            navItem.appendChild(subList);
        }
        // Add anchor to list item, and list item to list

        navList.appendChild(navItem);
        navElem.appendChild(navList);
    }
}

// Add list to body (or anywhere else)
window.onload = function () {
    document.body.appendChild(navElem);
}


class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <head>
        <link rel="stylesheet" href="./CSS/footer.css">
        </head>
        <section class="main"></section>
    <section class="footer">
      <section class="bubbles">
        <section class="bubble"
          style="--size:2.914325972743665rem; --distance:8.379879096159673rem; --position:103.39870818007424%; --time:3.2827040554461377s; --delay:-2.5818586517713555s;">
        </section>
        <section class="bubble"
          style="--size:4.278858422398866rem; --distance:6.8703474627191365rem; --position:29.44300363265038%; --time:3.121474720621538s; --delay:-3.5268211632882176s;">
        </section>
        <section class="bubble"
          style="--size:3.8789487865437806rem; --distance:7.30132098570789rem; --position:54.72021098014135%; --time:2.641725431722129s; --delay:-3.452868790539681s;">
        </section>
        <section class="bubble"
          style="--size:5.398748968429414rem; --distance:9.617633119152675rem; --position:36.02961443577017%; --time:2.4993089503367494s; --delay:-2.385851221123789s;">
        </section>
        <section class="bubble"
          style="--size:2.1503272188436116rem; --distance:9.797386549333886rem; --position:55.32197846332011%; --time:3.815345904992281s; --delay:-3.3420233279198963s;">
        </section>
        <section class="bubble"
          style="--size:3.0292329830481126rem; --distance:8.052219110180099rem; --position:21.166235127730396%; --time:2.179412284183736s; --delay:-3.9586092984537515s;">
        </section>
        <section class="bubble"
          style="--size:5.660264026409916rem; --distance:6.1824188742228285rem; --position:79.47908474173798%; --time:3.9674525753462393s; --delay:-3.7894086486382723s;">
        </section>
        <section class="bubble"
          style="--size:4.428925286379339rem; --distance:9.818495530830225rem; --position:79.95783487939495%; --time:3.3371831429636765s; --delay:-2.1557489610246416s;">
        </section>
        <section class="bubble"
          style="--size:2.107315417563564rem; --distance:9.654689782937137rem; --position:91.86633898763272%; --time:2.6845935277292075s; --delay:-2.7601453880919915s;">
        </section>
        <section class="bubble"
          style="--size:3.3427869735501394rem; --distance:6.1228981975128605rem; --position:53.82195878130034%; --time:3.1467968899362795s; --delay:-2.139577135606761s;">
        </section>
        <section class="bubble"
          style="--size:5.131354949435587rem; --distance:6.624795910505679rem; --position:49.84352969714399%; --time:2.374270789057249s; --delay:-3.961664359424115s;">
        </section>
        <section class="bubble"
          style="--size:3.9957941384397673rem; --distance:9.660836903201089rem; --position:48.70691062694707%; --time:2.716517162509743s; --delay:-2.604003051312804s;">
        </section>
        <section class="bubble"
          style="--size:5.203222207671887rem; --distance:9.651159006889248rem; --position:83.5240949188495%; --time:2.848059485800042s; --delay:-2.1358925587719777s;">
        </section>
        <section class="bubble"
          style="--size:4.16156052005604rem; --distance:8.668909165984852rem; --position:83.46823359055634%; --time:2.778803352744206s; --delay:-2.358786467117055s;">
        </section>
        <section class="bubble"
          style="--size:3.001152065245271rem; --distance:9.587940946910376rem; --position:51.90059000881577%; --time:3.7657812869062264s; --delay:-2.3624981120780837s;">
        </section>
        <section class="bubble"
          style="--size:5.596056063244077rem; --distance:6.734893752811475rem; --position:11.234549497624847%; --time:2.871695136025461s; --delay:-2.08245998698707s;">
        </section>
        <section class="bubble"
          style="--size:4.68490066898003rem; --distance:7.508651617612773rem; --position:1.682864973140381%; --time:3.8953365363210635s; --delay:-2.456254906432456s;">
        </section>
        <section class="bubble"
          style="--size:3.7354319839349026rem; --distance:7.266954906999627rem; --position:38.23656188632353%; --time:3.1837619860302357s; --delay:-2.41489476524728s;">
        </section>
        <section class="bubble"
          style="--size:2.082378700107448rem; --distance:7.627057717177034rem; --position:-0.42503183093035624%; --time:2.088152745552178s; --delay:-2.314382592043454s;">
        </section>
        <section class="bubble"
          style="--size:2.0056291281438643rem; --distance:9.460332373328463rem; --position:60.50724504073645%; --time:2.19878539112684s; --delay:-3.408443977366671s;">
        </section>
        <section class="bubble"
          style="--size:4.025316321587247rem; --distance:7.4117452791196605rem; --position:71.92072928214982%; --time:2.404875243590016s; --delay:-2.8635625674814498s;">
        </section>
        <section class="bubble"
          style="--size:3.042751371683007rem; --distance:9.66130150557417rem; --position:98.76749020626505%; --time:3.9418801997217274s; --delay:-3.9941704186556186s;">
        </section>
        <section class="bubble"
          style="--size:4.747279480303877rem; --distance:7.920807917582139rem; --position:32.85014436410338%; --time:3.81293879750075s; --delay:-3.6277409496306854s;">
        </section>
        <section class="bubble"
          style="--size:5.2019829540142215rem; --distance:6.279666448612981rem; --position:53.10102448149246%; --time:2.7398144680917147s; --delay:-2.242872661516834s;">
        </section>
        <section class="bubble"
          style="--size:2.4180928979069014rem; --distance:8.140060687690287rem; --position:1.277696766174488%; --time:2.4002451201144264s; --delay:-3.4052575961413476s;">
        </section>
        <section class="bubble"
          style="--size:5.101456296821272rem; --distance:7.573877366459195rem; --position:72.1119782451073%; --time:3.105647648023328s; --delay:-3.5580451429056583s;">
        </section>
        <section class="bubble"
          style="--size:5.078362732951777rem; --distance:7.441624340007914rem; --position:55.74186547305554%; --time:3.1060143379108425s; --delay:-2.3113916284297686s;">
        </section>
        <section class="bubble"
          style="--size:5.369082685247779rem; --distance:9.781428341333328rem; --position:55.137874477131305%; --time:3.490969366567811s; --delay:-3.003431012262567s;">
        </section>
        <section class="bubble"
          style="--size:4.972421885615818rem; --distance:8.268152086800804rem; --position:86.30730843903095%; --time:2.4647229892814946s; --delay:-3.7141323577815073s;">
        </section>
        <section class="bubble"
          style="--size:4.6040469533508634rem; --distance:9.065029013737028rem; --position:52.5648009136212%; --time:2.184476455956156s; --delay:-2.0464300136873343s;">
        </section>
        <section class="bubble"
          style="--size:4.666695462122725rem; --distance:6.172325440431409rem; --position:87.01831595489097%; --time:2.2682030195924336s; --delay:-3.0376576042149814s;">
        </section>
        <section class="bubble"
          style="--size:5.608504892242393rem; --distance:8.82987157858511rem; --position:31.384348048627736%; --time:3.7474971396011805s; --delay:-3.9450091011479618s;">
        </section>
        <section class="bubble"
          style="--size:3.372987003101284rem; --distance:8.760401784465607rem; --position:76.24923215381867%; --time:2.5222631240221585s; --delay:-2.884951724238629s;">
        </section>
        <section class="bubble"
          style="--size:4.266242806956912rem; --distance:8.430651418426255rem; --position:80.09026502084652%; --time:3.4143535872038666s; --delay:-3.7335814674568826s;">
        </section>
        <section class="bubble"
          style="--size:2.759806797468129rem; --distance:8.380888680268061rem; --position:44.511805119800144%; --time:3.328809560554339s; --delay:-2.3255221699602715s;">
        </section>
        <section class="bubble"
          style="--size:3.8004893968440374rem; --distance:6.081448388892892rem; --position:74.22989130738894%; --time:2.966063923153069s; --delay:-2.173993786336003s;">
        </section>
        <section class="bubble"
          style="--size:3.342306241472915rem; --distance:6.715953079046606rem; --position:55.51735582855346%; --time:2.0756622931587962s; --delay:-2.548499766086273s;">
        </section>
        <section class="bubble"
          style="--size:5.462887082290028rem; --distance:9.639776444707241rem; --position:5.045389489114694%; --time:2.2434327311146753s; --delay:-2.00286055364145s;">
        </section>
        <section class="bubble"
          style="--size:2.400332463748395rem; --distance:6.327085519531604rem; --position:85.87419693613595%; --time:2.7812077146271443s; --delay:-3.068770461070199s;">
        </section>
        <section class="bubble"
          style="--size:4.953881424385718rem; --distance:7.68017357266901rem; --position:66.93332301812079%; --time:2.763497752447781s; --delay:-2.8068887308276307s;">
        </section>
        <section class="bubble"
          style="--size:5.644020527177663rem; --distance:9.684769819814486rem; --position:2.1633825143954617%; --time:2.410963252079807s; --delay:-2.7995217464887383s;">
        </section>
        <section class="bubble"
          style="--size:4.564162714114887rem; --distance:8.699344364110651rem; --position:10.700983887465634%; --time:3.5120149345662273s; --delay:-2.5815958226526323s;">
        </section>
        <section class="bubble"
          style="--size:5.430219323265092rem; --distance:6.919724306364696rem; --position:28.64058795528893%; --time:2.5798683750314546s; --delay:-3.2481969853096504s;">
        </section>
        <section class="bubble"
          style="--size:5.067583117044071rem; --distance:8.832126585461117rem; --position:20.734991098728244%; --time:2.9958264695688674s; --delay:-2.144784292304927s;">
        </section>
        <section class="bubble"
          style="--size:4.791947780759188rem; --distance:6.442756050159071rem; --position:16.547141957427378%; --time:2.2793185838521794s; --delay:-2.8892680110523528s;">
        </section>
        <section class="bubble"
          style="--size:5.4411237503539045rem; --distance:9.388440827291332rem; --position:32.44826388227748%; --time:2.8370394454053156s; --delay:-2.433445464331717s;">
        </section>
        <section class="bubble"
          style="--size:5.116714766535119rem; --distance:8.54238096383971rem; --position:0.7410043398234372%; --time:2.206300189261596s; --delay:-3.639694875884397s;">
        </section>
        <section class="bubble"
          style="--size:3.9547637525480033rem; --distance:9.41942713814883rem; --position:93.21523892279892%; --time:2.6892772675459713s; --delay:-3.524500488807191s;">
        </section>
        <section class="bubble"
          style="--size:5.409315625960245rem; --distance:9.477034737466063rem; --position:103.69726022170646%; --time:2.8318598941335553s; --delay:-3.6829291003806577s;">
        </section>
        <section class="bubble"
          style="--size:4.32188184845799rem; --distance:6.068550243162903rem; --position:49.82617293130944%; --time:3.6751457877121525s; --delay:-2.3530520245107205s;">
        </section>
        <section class="bubble"
          style="--size:2.5193628564493977rem; --distance:7.766587490231822rem; --position:78.63575255715065%; --time:2.844555824708827s; --delay:-2.117837102777466s;">
        </section>
        <section class="bubble"
          style="--size:5.139521442142386rem; --distance:8.495082542938217rem; --position:3.819507255357424%; --time:2.5960335204271154s; --delay:-2.4160438604179095s;">
        </section>
        <section class="bubble"
          style="--size:2.688187280678944rem; --distance:9.210445322535106rem; --position:17.9434849186742%; --time:2.307347744026511s; --delay:-2.3691993332013435s;">
        </section>
        <section class="bubble"
          style="--size:5.333830291956317rem; --distance:9.860214734574893rem; --position:71.7528190878509%; --time:2.2654622536234266s; --delay:-2.2647682898928165s;">
        </section>
        <section class="bubble"
          style="--size:2.7815600374911975rem; --distance:8.227195556135023rem; --position:56.84340024935344%; --time:3.803488231961637s; --delay:-2.282830071658929s;">
        </section>
        <section class="bubble"
          style="--size:3.140414018355819rem; --distance:6.04671641848191rem; --position:27.9908159865724%; --time:3.831078682425365s; --delay:-3.0431704848354344s;">
        </section>
        <section class="bubble"
          style="--size:2.743791700312907rem; --distance:8.923843415896098rem; --position:0.8563096270659276%; --time:3.448484197167549s; --delay:-2.3485778796914802s;">
        </section>
        <section class="bubble"
          style="--size:3.355290776617106rem; --distance:8.988038430216825rem; --position:54.53857929328119%; --time:3.981156774078331s; --delay:-3.882062323281785s;">
        </section>
        <section class="bubble"
          style="--size:2.891541101961719rem; --distance:7.08791854285279rem; --position:5.937458725718418%; --time:3.4692172714103786s; --delay:-2.5003006210993464s;">
        </section>
        <section class="bubble"
          style="--size:3.9729626220936636rem; --distance:9.015007493501855rem; --position:84.44537014043362%; --time:3.0785316478626084s; --delay:-3.122629126151387s;">
        </section>
        <section class="bubble"
          style="--size:2.213105216830469rem; --distance:6.198810843116793rem; --position:34.218417266824524%; --time:3.9424084866048346s; --delay:-3.45458213869854s;">
        </section>
        <section class="bubble"
          style="--size:5.965413511076157rem; --distance:7.290125410011668rem; --position:48.79776959602362%; --time:3.889978615829363s; --delay:-3.2741508929113374s;">
        </section>
        <section class="bubble"
          style="--size:3.390137214254384rem; --distance:6.256798706020972rem; --position:27.629683192090567%; --time:3.9256498048956034s; --delay:-3.4617126049220937s;">
        </section>
        <section class="bubble"
          style="--size:4.450704965235912rem; --distance:7.346950743270001rem; --position:79.12977861549109%; --time:3.8798745622679993s; --delay:-3.210150399897999s;">
        </section>
        <section class="bubble"
          style="--size:3.788652941591428rem; --distance:8.17863244552967rem; --position:80.55027564352297%; --time:2.025326802665236s; --delay:-2.435127246742824s;">
        </section>
        <section class="bubble"
          style="--size:4.897463586179758rem; --distance:6.24907708391091rem; --position:-4.702600444983598%; --time:3.0386299003734343s; --delay:-3.4059865993617686s;">
        </section>
        <section class="bubble"
          style="--size:2.677090220763742rem; --distance:7.0876640626095675rem; --position:79.66557190468804%; --time:2.762422532778875s; --delay:-2.3216995128317968s;">
        </section>
        <section class="bubble"
          style="--size:4.881789656045993rem; --distance:8.316254149187571rem; --position:59.85764505822304%; --time:3.9192049423145905s; --delay:-2.2458354199124235s;">
        </section>
        <section class="bubble"
          style="--size:4.322397467660849rem; --distance:6.844055052505459rem; --position:3.5431952684567776%; --time:2.342756999869308s; --delay:-2.2602122066897627s;">
        </section>
        <section class="bubble"
          style="--size:4.2202179516451785rem; --distance:9.37885306666318rem; --position:41.85496752571393%; --time:3.1377039296363067s; --delay:-3.938226465822229s;">
        </section>
        <section class="bubble"
          style="--size:3.5285129703450675rem; --distance:7.538086883175568rem; --position:14.95583172907891%; --time:3.937016185319675s; --delay:-2.141136359022685s;">
        </section>
        <section class="bubble"
          style="--size:2.943268704679827rem; --distance:9.744921091730149rem; --position:42.69247665784248%; --time:2.3801094758879793s; --delay:-3.8674442035313112s;">
        </section>
        <section class="bubble"
          style="--size:4.521366832672159rem; --distance:6.206780559250322rem; --position:2.169252767785612%; --time:3.5039853724527252s; --delay:-3.352257606789722s;">
        </section>
        <section class="bubble"
          style="--size:4.955952556295983rem; --distance:8.27240348112225rem; --position:35.48947682284938%; --time:2.19366823680005s; --delay:-2.0800101596402185s;">
        </section>
        <section class="bubble"
          style="--size:2.7848168030441807rem; --distance:9.314730130391588rem; --position:47.67145005026688%; --time:2.9851469552709773s; --delay:-2.4339826582046076s;">
        </section>
        <section class="bubble"
          style="--size:3.818551178955814rem; --distance:9.824879033763256rem; --position:29.763038099638898%; --time:3.233659082809577s; --delay:-3.1551955629354578s;">
        </section>
        <section class="bubble"
          style="--size:3.527403563181143rem; --distance:6.211854933899034rem; --position:82.10923573264218%; --time:3.7845645280099425s; --delay:-2.8560453087719515s;">
        </section>
        <section class="bubble"
          style="--size:4.413177049829812rem; --distance:6.4970798049164rem; --position:20.06299406070609%; --time:2.4858916063879564s; --delay:-2.2784905803863356s;">
        </section>
        <section class="bubble"
          style="--size:5.776784859852324rem; --distance:8.330127848690442rem; --position:33.39139062858506%; --time:3.2771247467044304s; --delay:-2.161511404949753s;">
        </section>
        <section class="bubble"
          style="--size:2.3201115795553635rem; --distance:6.95854532258899rem; --position:67.92241278226078%; --time:2.7463156687230237s; --delay:-2.5573205215791996s;">
        </section>
        <section class="bubble"
          style="--size:4.569022530193818rem; --distance:9.987894110419903rem; --position:36.58868618142541%; --time:3.423543730541524s; --delay:-3.880083596659819s;">
        </section>
        <section class="bubble"
          style="--size:4.874575110916809rem; --distance:8.480399537608822rem; --position:74.10087614546295%; --time:2.692269919630676s; --delay:-2.330697248568528s;">
        </section>
        <section class="bubble"
          style="--size:4.069413167842865rem; --distance:8.560649897473391rem; --position:76.6771395165492%; --time:2.8573137375353084s; --delay:-2.0990523984815415s;">
        </section>
        <section class="bubble"
          style="--size:4.097752048287762rem; --distance:6.886877391828939rem; --position:34.05858971340704%; --time:3.663442066693829s; --delay:-2.6478593022348513s;">
        </section>
        <section class="bubble"
          style="--size:4.933827992100865rem; --distance:8.083937846950551rem; --position:56.96270883664981%; --time:3.1497684775419272s; --delay:-2.4136140867433875s;">
        </section>
        <section class="bubble"
          style="--size:4.538906107947256rem; --distance:9.427961971492993rem; --position:42.496756331526484%; --time:2.7418739601268602s; --delay:-3.1619407281047613s;">
        </section>
        <section class="bubble"
          style="--size:4.799609410368515rem; --distance:8.621150255831122rem; --position:29.237467157795116%; --time:2.147872855854819s; --delay:-3.303022142071132s;">
        </section>
        <section class="bubble"
          style="--size:3.4352140128522555rem; --distance:9.962864876812452rem; --position:-3.1054222958286104%; --time:2.6500205199880456s; --delay:-3.6271628207684135s;">
        </section>
        <section class="bubble"
          style="--size:2.484768682066343rem; --distance:6.982664558361263rem; --position:19.888175766083314%; --time:3.996489756292926s; --delay:-2.5706104183871874s;">
        </section>
        <section class="bubble"
          style="--size:4.029399021330784rem; --distance:6.252857135192373rem; --position:83.50338216121332%; --time:3.538983845310126s; --delay:-3.6913864179315055s;">
        </section>
        <section class="bubble"
          style="--size:4.955601993327452rem; --distance:6.979774169415601rem; --position:95.56425516236641%; --time:2.535616532149037s; --delay:-2.6513359526720897s;">
        </section>
        <section class="bubble"
          style="--size:5.3830822991843865rem; --distance:9.357351476356115rem; --position:82.88853093503839%; --time:3.419721051984616s; --delay:-2.579735803446909s;">
        </section>
        <section class="bubble"
          style="--size:2.0168075535803798rem; --distance:6.6447536393831905rem; --position:49.05004462998396%; --time:3.9049066671668338s; --delay:-3.0067944664299486s;">
        </section>
        <section class="bubble"
          style="--size:2.6039511368891324rem; --distance:7.833115971007377rem; --position:11.939250243143675%; --time:3.843686038395662s; --delay:-3.5920746394859275s;">
        </section>
        <section class="bubble"
          style="--size:5.910479475639672rem; --distance:9.827535043427723rem; --position:75.4128227266736%; --time:3.1565229556108045s; --delay:-2.321251636554271s;">
        </section>
        <section class="bubble"
          style="--size:5.715125234469883rem; --distance:7.918762084262411rem; --position:67.59256452191653%; --time:3.388027045494211s; --delay:-3.2755874936627447s;">
        </section>
        <section class="bubble"
          style="--size:2.9855023287153895rem; --distance:6.583992349365089rem; --position:33.82030458103177%; --time:3.576995543097113s; --delay:-2.7281023996790665s;">
        </section>
        <section class="bubble"
          style="--size:4.977907736776864rem; --distance:7.897576620496096rem; --position:67.24950409214837%; --time:3.1551263952217696s; --delay:-3.973767466245278s;">
        </section>
        <section class="bubble"
          style="--size:2.578302045335195rem; --distance:7.360241678840363rem; --position:14.029268086854032%; --time:3.03666996952549s; --delay:-3.134049469430684s;">
        </section>
        <section class="bubble"
          style="--size:5.940887886438608rem; --distance:8.595931875976076rem; --position:56.468316420229705%; --time:3.890408002622237s; --delay:-3.6399707040978786s;">
        </section>
        <section class="bubble"
          style="--size:2.1547246760855643rem; --distance:8.030691791291126rem; --position:84.09543402555121%; --time:2.4559520380105324s; --delay:-2.4046942654847125s;">
        </section>
        <section class="bubble"
          style="--size:5.512369590542518rem; --distance:8.634204617825477rem; --position:72.97666296643862%; --time:3.673831890976718s; --delay:-3.4265007578603446s;">
        </section>
        <section class="bubble"
          style="--size:2.994045911893828rem; --distance:9.612864699567844rem; --position:80.37994896479418%; --time:2.261206627728229s; --delay:-3.7849500213256966s;">
        </section>
        <section class="bubble"
          style="--size:2.2241896601588884rem; --distance:7.500765581010443rem; --position:36.11190932644802%; --time:3.950483744994432s; --delay:-3.9394994660001204s;">
        </section>
        <section class="bubble"
          style="--size:3.011717441193851rem; --distance:8.258719042765506rem; --position:39.49299084551374%; --time:2.6758798672873336s; --delay:-2.2505307356999906s;">
        </section>
        <section class="bubble"
          style="--size:4.40068766328278rem; --distance:7.1947703170806365rem; --position:-3.962316191878079%; --time:3.5746227573262708s; --delay:-2.0717451002331426s;">
        </section>
        <section class="bubble"
          style="--size:5.020716193952661rem; --distance:8.632271945555523rem; --position:68.62278265393738%; --time:2.4439726434216102s; --delay:-2.269089626100301s;">
        </section>
        <section class="bubble"
          style="--size:3.6865756238496674rem; --distance:9.282880596087534rem; --position:64.00620352441197%; --time:2.4884870760309488s; --delay:-2.0567981240873876s;">
        </section>
        <section class="bubble"
          style="--size:3.6995898876748434rem; --distance:9.954298299855093rem; --position:73.22111810845854%; --time:3.865308677645935s; --delay:-2.4042805242044882s;">
        </section>
        <section class="bubble"
          style="--size:5.0725298409316535rem; --distance:7.673517994594999rem; --position:-2.4448009519941016%; --time:2.739754960263802s; --delay:-3.2370194840062685s;">
        </section>
        <section class="bubble"
          style="--size:4.356025856335153rem; --distance:6.652057232602972rem; --position:32.7540671803274%; --time:3.260613172539181s; --delay:-2.842488912226091s;">
        </section>
        <section class="bubble"
          style="--size:3.9202750630849073rem; --distance:6.080923594757875rem; --position:6.693135904806278%; --time:2.2137723018231537s; --delay:-3.817996003543117s;">
        </section>
        <section class="bubble"
          style="--size:4.363494219688984rem; --distance:7.478627350626849rem; --position:8.440215853588327%; --time:3.6427420560640495s; --delay:-3.8577981300696034s;">
        </section>
        <section class="bubble"
          style="--size:3.456741040006203rem; --distance:6.945176863191305rem; --position:49.62770975352755%; --time:3.588248379602838s; --delay:-3.1242364007600165s;">
        </section>
        <section class="bubble"
          style="--size:3.1424398677253587rem; --distance:9.401726781032302rem; --position:6.047465672188427%; --time:2.3682904086464154s; --delay:-3.925896823471931s;">
        </section>
        <section class="bubble"
          style="--size:3.5880902931440852rem; --distance:8.928734377613385rem; --position:23.758818761884047%; --time:2.9449733508846334s; --delay:-2.8579605443251737s;">
        </section>
        <section class="bubble"
          style="--size:5.599676108485049rem; --distance:6.438813968834083rem; --position:25.1679981817034%; --time:2.078111726673142s; --delay:-3.8513745397355517s;">
        </section>
        <section class="bubble"
          style="--size:3.0934608597123683rem; --distance:8.339237326209084rem; --position:35.16036757069851%; --time:3.4275284991377633s; --delay:-3.1063471793429027s;">
        </section>
        <section class="bubble"
          style="--size:5.192483409221961rem; --distance:7.4531155176416rem; --position:62.49837588019196%; --time:2.3539178191162358s; --delay:-2.6510705678283006s;">
        </section>
        <section class="bubble"
          style="--size:5.005904075660012rem; --distance:8.840161396099614rem; --position:57.736576740112326%; --time:3.661633956668135s; --delay:-2.0825770610277607s;">
        </section>
        <section class="bubble"
          style="--size:3.520776628440247rem; --distance:9.78015880691007rem; --position:2.2439938979538514%; --time:3.0817528769961267s; --delay:-2.2634107424893815s;">
        </section>
        <section class="bubble"
          style="--size:3.1759900460215116rem; --distance:9.646732575378305rem; --position:2.057555510018421%; --time:3.8131590048914s; --delay:-3.941149950081087s;">
        </section>
        <section class="bubble"
          style="--size:5.030470284758494rem; --distance:7.244751673531872rem; --position:51.85920409143436%; --time:3.7797730343530054s; --delay:-3.5160171143393053s;">
        </section>
        <section class="bubble"
          style="--size:5.414426794789626rem; --distance:8.266804951435685rem; --position:19.0712916448151%; --time:3.8044217376790344s; --delay:-3.75064688818809s;">
        </section>
        <section class="bubble"
          style="--size:5.117838742974077rem; --distance:6.220376092046942rem; --position:43.72300260929311%; --time:2.866980330581706s; --delay:-2.2379216846810217s;">
        </section>
        <section class="bubble"
          style="--size:4.780935267944788rem; --distance:8.574982187261117rem; --position:10.780711328454993%; --time:3.7548831411008408s; --delay:-3.490364904391674s;">
        </section>
        <section class="bubble"
          style="--size:5.584476342514914rem; --distance:6.468010079810622rem; --position:45.692864745994314%; --time:2.9390444906627473s; --delay:-3.1068116430232173s;">
        </section>
        <section class="bubble"
          style="--size:2.5153521697893773rem; --distance:8.915770098189856rem; --position:12.605250685321298%; --time:2.6804935387089297s; --delay:-2.0904255997798753s;">
        </section>
      </section>
      <section class="content">
        <section>
        <div class="footer-social-icons">
        <h4 class="_14">Follow us on</h4>
        <ul class="social-icons">
            <li><a href="" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-youtube"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-github"></i></a></li>
        </ul>
    </div>
        </section>

      </section>
    </section><svg style="position:fixed; top:100vh">
      <defs>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob">
          </feColorMatrix>
          <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
        </filter>
      </defs>
    </svg>

        `
    }
}
customElements.define('my-footer', myFooter)


var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Oops! You weren't supposed to see this.   The page you're looking for no longer exists.     Return to the main page and remember: you haven't seen anything. "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": "👋 Why hello there, I’m Tessa!: Born and bred in Singapore, my latest job experience was as a Senior UX Architect in the Defence Science and Technology Agency of Singapore. It was my first job after graduating with a B. E. (Hons) in Computer Science (with a specialisation track in UX/UI Design) from the Singapore University of Technology and Design in 2019. 👀 I am currently on an active lookout for opportunities. : You can view my resumé here. ☕️ Let’s Connect!: If you will like to hear more about me or think that I’ll be a good fit for your team, feel free to drop me a message via email or LinkedIn to get in touch with me. I look forward to meeting with you! "
    }, {
    "id": 2,
    "url": "http://localhost:4000/authors",
    "title": "Authors",
    "body": "                                                                                                                                        tgsy:         UX Designer, based in Singapore.                "
    }, {
    "id": 3,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to Tessa Goh - UX/UI Engineer, Singapore. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                                                                      1                          UX Architect @ DSTA                  :                                                            UX Work Experience                                                                                                                             2022            &lt;/span&gt;                                                                                                                                                                                2                          Redesigning Google MyMaps                  :                                                            Web App                                                                   Redesign                                                                                              2020            &lt;/span&gt;                                              "
    }, {
    "id": 6,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/dsta",
    "title": "UX Architect @ DSTA",
    "body": "2022/02/11 - About DSTA: DSTA is an agency under Singapore’s defence ministry and was formed to deliver innovative solutions to enhance the fighting capabilities of the Singapore Armed Forces (SAF). It is a multidisciplinary organisation that covers the diverse needs of the SAF, and its portfolio ranges from acquisition management, digitised platforms, cyber analytics, software development and more. My Role: I joined DSTA’s C3 Development (C3D) Programme Centre, as a UX architect in the Design Innovation (DI) Team. As a member of the DI team, I help ensure that DSTA’s products are user-centred and help deliver new or improved defence systems with great user experiences in DSTA’s quest for defence software modernisation. As a team, we rigorously engage the SAF users in our design processes to understand their military workflow and help them streamline these existing processes to save precious time and effort. My Assignment: I was assigned to co-lead the design of an advanced command and control system, which was in a form of a large scale desktop application. The project team was co-managed by two product managers and consisted of 20 software developers. The design team grew from a strength of two to four towards the last quarter of 2021. The project team was split into 3-5 development teams (varying depending on the project timeline), each consisting of a ScrumMaster cum lead developer and a few other developers. In a quest to push for a user-centred product, the project team practices an agile framework, with concurrent bi-weekly sprints for each development team. Project Overview: The project aims to deliver a powerful desktop application that is meant to serve the planning and monitoring needs of army soldiers across various vocations during wartime operations. It follows a modular software architecture and is built on a Smart Geographical Infomation System (GIS). Why it Started: The project was started to replace an existing system running on a legacy system and which has become increasingly obsolete in recent years. The outdated system affected user experience and the old technology meant that many mundane and procedural tasks that could be automated were still being done manually. The new system, therefore, harnesses new technology such as automation to raise work efficiency and simultaneously offer a seamless integration of data to improve interoperability across the army, which was not possible in the old system. My Contributions: I led the delivery of about 5 modules within the system and saw through two product releases of the system through the design cycle, during which:  I conducted user research through interviews, observations and user workshops to elicit user needs I did up prototypes, which ranged from paper sketches to high-fidelity and interactive design mock-ups I provided and solicited critique on my designs and that of my team-mates’ during internal design critique sessions I led the planning and conducting of usability tests to further improve designs I oversaw the implementation of designs for product release → For one of the modules I led, a user estimated the module to reduce up to 90% of the total time taken in their existing workflow. On top of that, I also co-led the delivery of a mini design system with design principles and guidelines to ensure design consistency throughout the system and also its adherence to the C3D Design System. Tools I Used:  Collaboration Tools: Jira, Confluence Design Tools: Adobe XD, Axure RP9❗️&#x203Ca; &#xFE0Fa; Disclaimer: *As a past employee at DSTA, I am trusted to abide by the Official Secrets Act and to safeguard the confidentiality of the information I have had access to. As such, I am unable to display the works that I have done during my time at the company. However, I am more than happy to talk more in detail about my contributions to the project in an interview (or over a cup of coffee ☕️). "
    }, {
    "id": 8,
    "url": "http://localhost:4000/google-mymaps",
    "title": "Redesigning Google MyMaps",
    "body": "2020/02/02 - Within the Hôtel de Crillon, which was built in 1758, Les Ambassadeurs operated as a restaurant since the mid-19th century. It reached its peak of fame as a restaurant and nightclub (a café-concert) in the last three decades of the 19th century. Always a center of entertainment for the aristocracy, in the 1870s it also became a regular destination of some of the best known figures of art and the demi-monde. Edgar Degas and Henri de Toulouse-Lautrec portrayed visitors at the night club, and Aristide Bruant performed there.  It was decorated in an 18th-century rococo style, redesigned by Sybille de Margérie with furnishings by Sonia Rykiel. Following a renovation of the hotel in 1981–85, the restaurant occupied a former private ballroom with windows looking out on the Place de la Concorde, a few hundred meters from the Palais Garnier. Les Ambassadeurs had two Michelin stars. In the last decade of its operation, chef was Dominique Bouchet followed by Jean-François Piège and finally when the hotel closed in 2013 for an extended renovation, Christopher Hache. In 2017 Hache opened a smaller restaurant, L’Écrin, within the renovated hotel; the former space of Les Ambassadeurs became a bar. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});
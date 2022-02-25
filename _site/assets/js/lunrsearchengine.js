
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Oops! You weren't supposed to see this.   The page you're looking for no longer exists.     Return to the main page and remember: you haven't seen anything. "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": "👋 Why hello there, I’m Tessa!: Born and bred in Singapore, I am currently based in the Defence Science and Technology Agency of Singapore as a Senior UX architect. This is my first job after graduating with a B. E. (Hons) in Computer Science (with a specialisation track in UX/UI Design) from the Singapore University of Technology and Design in 2019. 👀 I am currently on an active lookout for opportunities. : You can view my resumé here. ☕️ Let’s Connect!: If you will like to hear more about me or think that I’ll be a good fit for your team, feel free to drop me a message via email or LinkedIn to get in touch with me. I look forward to meeting with you! "
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
    "body": "                                                                                                                                      1                          UX Architect @ DSTA                  :                                                            UX Experience                                                                                                                             2022            &lt;/span&gt;                                                                                                                                                                                2                          Redesigning Google MyMaps                  :                                                            Web App                                                                   Redesign                                                                                              2020            &lt;/span&gt;                                              "
    }, {
    "id": 6,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/dsta/",
    "title": "UX Architect @ DSTA",
    "body": "2022/02/11 - RoleUser Experience Architect DurationMar 2020 - Mar 22 Background: The Queen’s Guard and Queen’s Life Guard (called King’s Guard and King’s Life Guard when the reigning monarch is male) are the names given to contingents of infantry and cavalry soldiers charged with guarding the official royal residences in the United Kingdom. The British Army has regiments of both Horse Guards and Foot Guards predating the English Restoration (1660), and since the reign of King Charles II these regiments have been responsible for guarding the Sovereign’s palaces. The Guards are fully operational soldiers. The Queen’s Guard and Queen’s Life Guard are mounted at the royal residences that come under the operating area of the British Army’s London District, which is responsible for the administration of the Household Division. This covers Buckingham Palace, St James’s Palace and the Tower of London, as well as Windsor Castle. The Queen’s Guard is also mounted at the sovereign’s other official residence, the Palace of Holyroodhouse, but not as often as in London. In Edinburgh, the guard is the responsibility of the resident infantry battalion at Redford Barracks. It is not mounted at the Queen’s private residences at Sandringham or Balmoral.  The Queen’s Guard is the name given to the contingent of infantry responsible for guarding Buckingham Palace and St James’s Palace (including Clarence House) in London. The guard is made up of a company of soldiers from a single regiment, which is split in two, providing a detachment for Buckingham Palace and a detachment for St James’s Palace. Because the Sovereign’s official residence is still St James’s, the guard commander (called the captain of the guard) is based there, as are the regiment’s colours. When the Sovereign is in residence, the Queen’s Guard numbers three officers and forty other ranks, with four sentries each posted at Buckingham Palace (on the forecourt) and St James’s Palace (two in Friary Court, two at the entrance to Clarence House). This reduces to three officers and 31 ORs, with two sentries each, when the Sovereign is not in residence. The Queen’s Guard is not purely ceremonial in nature. They provide sentries during the day and night, and during the later hours, they patrol the grounds of the Palace. Until 1959, the sentries at Buckingham Palace were stationed outside the fence. This stopped following an incident involving a female tourist and a Coldstream Guardsman – due to the continued pestering by tourists and sightseers, the guardsman kicked the tourist on the ankle as he marched. The tourist made a complaint to the police and the sentry was confined to barracks for ten days. Not long after, the sentries were moved inside the fence. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/google-mymaps/",
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
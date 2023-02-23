
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Oops! You were not supposed to see this.   The page you're looking for no longer exists.     Return to the main page and remember: you haven't seen anything. "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": "👋 Why hello there, I’m Tessa!: Born and bred in Singapore, my latest job experience was as a Senior UX Architect in the Defence Science and Technology Agency of Singapore. It was my first job after graduating with a B. E. (Hons) in Computer Science (with a specialisation track in UX/UI Design) from the Singapore University of Technology and Design in 2019. 👀 I am currently on an active lookout for opportunities. : You can view my resumé here. ⏳ How I spend my free time: In my free time, you’re likely to find me binging on a top title on Netflix/a riveting novel, sweating it out with a workout, doodling on my iPad, or cleaning up my space. ☕️ Let’s connect!: If you will like to hear more about me or think that I’ll be a good fit for your team, feel free to drop me a message via email or LinkedIn to get in touch with me. I look forward to meeting with you! "
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
    "body": "  Please send your message to Tessa Goh - UX/UI Designer, Singapore. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                                                            YouTrip                  :                 Improving a multi-currency wallet:                                                                                                      Mobile App                                    Personal Project                                                                                                                                                                                                                                                                             Super C3 System                  :                 Building a complex military desktop system:                                                                                                      Design Lead                                    User Research                                                                                                                                                                                                                                                                             Achieva Vending                  :                 Re-designing a vending provider's website:                                                                                                      Visual Design                                    Web Design                                                                                                                                                                                                                                                                             Google MyMaps                  :                 Improving a map web app for travel planning:                                                                                                      App Improvement                                    Personal Project                                                                                                                                                     "
    }, {
    "id": 6,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/youtrip-redesign",
    "title": "YouTrip",
    "body": "2022/09/01 - Problem: The YouTrip app has been stagnating, with few improvements to the app since it started four years ago. With a business model that mainly profits through cross-border transactions, it is likely the business suffered a heavy blow with the travel ban during the COVID-19 pandemic. It is little surprise, therefore, that YouTrip introduced Perks - exclusive privileges in the form of discounts and rebates with partner merchants for its cardholders to encourage transactions using their Mastercard. More recently, they have also partnered with HL Assurance, a local insurance company, to offer discounted insurance plans for YouTrip travellers. However, even as an avid YouTrip user myself, I find these newly introduced features difficult to use due to their poor usability. From word of mouth, I understand the company places significant investments in their marketing efforts. YouTrip has a blog and Telegram channel that the marketing team updates frequently. However, they offer their customers only disjointed access to this marketing content. There has also been an increasing number of competitors that have entered the Singapore market since, which begs an improvement in the YouTrip app to ensure it stays competitive and retains its market share in the long run. 💜 Disclaimer: I am not affiliated with YouTrip and this redesign was done completely of my own volition. Online Reviews: To verify that I was not the only user who thought YouTrip experience could be further improved, I looked at user reviews available online for data.   YouTrip has a review score of 4. 6 on Seedly (a personal finance community) forum.  It also sits relatively high with scores of 4. 3 and 4. 0 on the Apple Store and Google Play Store respectivelyYouTrip has a relatively high review score on the various review boards. However, inspection reveals recent reviews are not doing as well.   While the overall review scores fare relatively well, recent reviews are dropping. Common feedback observed can be summarised as such:  Summary of common feedback retrieved from online reviewsCompetitive Analysis: To understand the competitors that YouTrip was up against, I did a simple competitive analysis of other multi-currency accounts available in the market:  YouTrip compared to other popular multi-currency accounts available in the market. It is clear from this simple feature comparison that YouTrip mainly appeals to potential customers as a free multi-currency wallet for convenient travel payments during travel. Heuristics Evaluation: To identify issues with the existing app, I assessed its information architecture and did a round of heuristics evaluation on the user interface.   A screenshot and site map of the existing YouTrip iOS mobile appThe YouTrip app consists of five tabs in the navbar and a settings page that allows the configuration of account information and app settings. It has an interface that is straightforward to navigate and simple to use. However,  it offers little convenience to its users.      As a product that allows its user to ‘Lock in competitive exchange rates, it does not offer a glossary view of forex rates. Rather, a user would have to swipe to each of the 10 supported currencies to view the current exchange rate. This is highly inconvenient for users (like myself) who do not have the habit (and thus use any existing tools) of keeping a lookout for favourable currency rates.    In addition, when using the app for making purchases in other currencies apart from the 10 in-app exchange currencies supported, there is no convenient way to check the current exchange rate in-app. As usual, Google is the best companion.     it lacks customisability     The app arranges all wallets from left to right by most recent to least recently accessed. It does not allow users to customise their wallet view so the user can easily access currency wallets that matter more quickly.     its information architecture could be improved     The information architecture of the app could also be re-organised. For instance, the Card tab takes up precious space in the navbar but provides little additional useful information and control to users. The discounted insurance plan offered occupies a separate tab on its own in the navbar, even though it is also a Perk offered to the users, in partnership with HL Insurance.     some of its functions have poor discoverability     Certain functions like Search for transactions also have poor discoverability. There are also instances of poor contrast resulting in poor legibility due to the adherence to branding colours.    User Research: To validate these issues identified, I conducted an online survey with 16 YouTrip users using Typeform.   As I was scouting for participants for my research that it was difficult to find YouTrip users, even among my peers, who are generally tech-savvy  Selected survey results on the YouTrip experienceWhat I found was as follows:  As expected, users mainly used YouTrip during travel, only a small percentage for online shopping.  Most users did not have a habit of keeping a lookout for favourable currency rates and thus were unlikely to use YouTrip to ‘lock’ in on favourable exchange rates.  Before making purchases with YouTrip, users generally head to Google to check and convert prices to SGD.  The onboarding and findability of Perks can be improved to encourage usage.  Despite their strong marketing efforts, 72. 7% of users did not know that YouTrip has a blog. User Persona and Journey Mapping: I summarised all my research findings in the form of a user persona and mapped out the experience of using YouTrip as the main mode of payment for a travel trip to better identify opportunities for improvement.   User Persona capturing the needs and frustrations of a typical user who intends to use YouTrip as her mode source of payment for a travel trip to Japan  User Journey Map detailing the potential opportunities for design improvementsIdeation: As always, ideation began on pen and paper, before moving on to a digital prototyping tool.   Figma was used as the main prototyping tool for the whole of this projectUsability Testing: I began testing my low-fi designs by using Maze as the platform for unmoderated remote usability testing, making sure to use convincing placeholder data in my wireframes. I got about five users to test my preliminary design.   The pre-requisite for participants was to be existing YouTrip usersFindings &amp; Insights:  The discoverability of new tabs in the navbar could be improved.      User onboarding in the form of overlays can potentially alleviate this.    The term ‘Marketplace’ was also not intuitive to the users.     Users tend to skip ahead of reading ‘How to’ when redeeming their perks.      Dialogue prompts for first-time perk users can help.    With these findings &amp; insights in mind, I improved upon my designs as I worked on the hi-fidelity prototypes.   Hi-fidelity prototypes done on FigmaThe Solution: Several feature additions and improvements been added to improve the overall experience of the app, with the following highlights:                 Your browser does not support the video.             Real-Time Exchange Rate Table and Converter:    A new feature addition that         streamlines price checking and decision-making process during travel or while making online purchases     helps differentiate between in-app exchange currencies and other supported currencies                           Your browser does not support the video.             Calculator:    Another new feature addition complementing the in-app real-time exchange rate table and converter above that         also streamlines price checking and decision-making process during travel     help in expense tabulation and encourage ATM withdrawal                           Your browser does not support the video.             Improved Perks:    Proposed improvements to existing YouTrip Perks that         makes it easier to search for perks by categorising priviledges available and offering a search function     offers visibility on cashback status through 'Accumulated Perks'     improves onboarding to encourage usage           Prototype: Feel free to click around with the high fidelity mockups below: Takeaways: Project Learnings:  Always set the expectations of participants in a usability test if you can do so yourself:It was my first time conducting a usability test in an unmoderated, remote environment. Even when using an established tool for the usability test, one should always stage the environment and set the expectations when you can do it personally. What could be done better:  Limited access to YouTrip users: &lt;20 users involved in the survey, and are mostly tech-savvy working adults; in the same target group Usability Testing     Maze is on desktop and YouTrip is a mobile app   Unmoderated usability testing has its drawbacks as you are not personally with the participant as they work through their tasks.    Areas for further development:    Reliability of payments:Visibility of payment status for transactions could be improved to raise trust in the service. However, more in-depth information would be necessary to build on the solution.     Security Issues and Customer support: Internal issues that are beyond my control without more information but are critical to the overall YouTrip experience.  "
    }, {
    "id": 8,
    "url": "http://localhost:4000/superc3system",
    "title": "Super C3 System",
    "body": "2022/03/02 - ‼️ Disclaimer: As a past employee at DSTA, I am to abide by the Official Secrets Act and safeguard the confidentiality of the information I have had access to during my employment. As such, I cannot display the works I have done during my time at the company. However, I am willing to share more in detail about my contributions to the project over a face-to-face chat. ☕️About the Project: What the Super C3 System is: In the military context, C3 Systems are fundamental to operations by delivering the critical information required to plan, coordinate and control forces and operations across defence missions in real-time. The Super C3 System is a powerful desktop app that serves the planning, monitoring and execution needs of army soldiers across the various vocations during wartime exercises and operations. It follows a modular software architecture and builds on a Smart Geographical Information System (GIS). Why it Started:  The legacy system that the Super C3 System replaces has poor UX, requires tasks to be completed manually and has poor data integrationThe Super C3 System replaces an existing legacy system that has become increasingly obsolete. With the outdated system, user experience was poor, and many mundane and procedural tasks with automation potential still had to be done manually. A new replacement was long overdue to improve work efficiency. Advances in communication technology also mean data integration is now possible to allow better interoperability across the army forces, which was previously impossible with the old technology and poorly integrated modules. Primary Design Goals:  Create a user-friendly experience to reduce resources on user training by aligning with commercial design patterns.  Be a great landing pad. Many users will be transitioning from the existing legacy system, which should be a fluid experience.  Raise work efficiency by harnessing the potential of automation, eliminating the effort required for procedural tasks. Team Structure:  The project team splits into smaller development teams consisting a lead developer and couple with one or a pair of UX designersManaged by two product managers, the project team consists of ~20 software developers and a small design team. The design team grew from a strength of two to four towards the last quarter of 2021. The project team splits into 3-5 development teams (depending on the project timeline) and practices the Scrum methodology, with bi-weekly sprints held concurrently. Each development team has a ScrumMaster cum lead developer and couples with at least one or a pair of UX designers. I was matched with three development teams and collaborated closely with a fellow UX designer when she joined the team. The Design Process: For the modules in the system under my charge, I adhered to a consistent design process in my delivery. User Research: As a team, I conducted user research sessions through qualitative user interviews and user research workshops to elicit user needs and pain points from the users’ existing work processes. We also synthesised design opportunities from ‘How Might We’ statements gathered from these user research sessions. Insights: I generated UX artefacts to document complex military workflows and align the project team in the existing user flows. Prototyping: I created the information architecture and low-fidelity concepts for primary use cases and workflows. After obtaining the green light from the product managers, developers and stakeholders, these concepts are translated to high-fidelity and interactive digital mock-ups, most times by my teammate or occasionally by myself. Usability Testing: I led my team to conduct testings of our product to verify designs nearing product release.  Before product releases, we tested our designs with various user groups by simulating mission scenarios to ensure the product was usable and covered all their operational needs. Seeing Results:  The overall system usability improved following a revamp of the system’s UX.  The overall system usability improved from an average System Usability Scale (SUS) score of 50. 0 to 63. 6 following a revamp of the system’s user experience.  For one of the modules I designed,     The average SUS score was 80. 8, and   a user estimated the module to reduce up to 90% of the total time required in their existing workflow.    A Mini Design System: I co-led the delivery of a mini design system that specifies the system’s design principles and guidelines. This mini design system helps ensure design consistency throughout the Super C3 System and alignment with the C3D Design System. Project Learnings:  Anyone can be a user (but yourself). It is easy to fall prey to the false-consensus effect when designing. Always test to verify a design. When time is lacking, anyone can be the user, including our project mates. Sometimes, a fresh new perspective is all that is needed.  Test early and continuously. Involving stakeholders/users in the process as early as possible can help identify loopholes and unlock insights that save precious time and effort later on.  Prioritisation is key. Focus on delivering a quality MVP first when rolling out new features/functions and avoid getting distracted by out-of-scope requests (or sometimes, even your own ideas).  The design ≠ the final product. Sometimes we can get carried away with producing pixel-perfect designs, but what matters most is always the final product delivered. When resources are tight, ensuring the product is developed right should be the priority. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/vending-website",
    "title": "Achieva Vending",
    "body": "2022/03/01 - The Problem: The main reasons behind the re-design were as such:  The site looked outdated and contained visuals of poor resolution.  It did not offer a seamless experience across all devices.  It neither met new business needs nor reflected the business’s values well.  Screengrabs of the old siteResearch: Target audience: To identify the main types of users visiting the company’s website, I scouted past contact form submissions to understand why users visited the site.   Past contact form submissionsThe main types of users identified were:  Potential customers looking for vending solutions, Existing customers in need of service support or wishing to provide feedback and Food and beverage suppliers looking for collaboration. Content Strategy: I spoke to the founder and sales team to understand the company’s strategy in standing out from its competitors.   What the company strives towards in its vending services, collated during my discussion with the founder and sales teamVoice and Tone: What sets the company apart, as an SME, is also the cordialness it offers to its customers. With this and the above list in mind, the improved website should, therefore, adopt a clean look and adopt a friendly tone of writing. Ideation: Competitive Analysis: For the initial brainstorming, I sourced inspiration from the websites of other vending providers, both local and abroad and identified the good attributes that I could learn from, such as understanding common industry terms to help in clarity in communication for the new website. Information Architecture: After a preliminary sharing and discussion with the business owners, some sections in the proposed IA were removed due to business considerations and eventually looked like this:  Site map for the improved websiteThe new website adds a new ‘Careers’ page to help raise the visibility of the vacancies available in the company given the business’s manpower shortage needs. Wireframing: I started conceptualising by first creating low-fi wireframes on a note-taking app. 	 	 	   Prototyping: Color Scheme: The site’s colour scheme builds upon the colours existing in the company’s logo by adding a colour (Trypan Blue #3D14B8) that is complementary to the Apple Green (#8fb914) present in the logo.   Color scheme adopted for the new site, built upon the company’s logoHigh-fidelity prototypes: I made the hi-fi prototypes with Sketch, the visual graphics with Adobe Illustrator and Photoshop.   Hi-fi mockups created on Sketch  Header image in the Home page  Vending Machine illustrations created for the Home pageThe Final Product: Implementation: The site was implemented and published with Weebly. I built the site on top of an existing theme available and then modified it to match my designs using the HTML editor. Below are screenshots of the improved website.   Screenshots of the improved site: ‘Home’ page and ‘What We Offer’ pageEvaluation: Constraints: Budget considerations and limited functionalities of the Weebly website builder meant that many design decisions had to be tweaked due to a lack of feasibility in implementation, or else to ensure a seamlessly responsive experience across mobile devices. Areas for Improvement: Vending Machine specifications such as the machines’ dimensions and power input are required to allow potential customers to gauge the feasibility of employing the company’s services before reaching out. This information was included in the initial planning during ideation but has been omitted later due to the lack of data available. Project Learnings/Takeaways:  Focus on building an MVP first. In an SME, there is only so much time and effort that its staff can invest for you, so it’s important to focus on building an MVP and then improving from there (e. g. including vending machine specifications) Always make sure you fully understand your constraints prior to designing. I began re-designing certain micro-interactions without first verifying if it was feasible to implement those designs on the site builder. I later had to tweak my design to fit within the constraints of Weebly’s site-building tools.  Business considerations are prime. As much as UX is important to me as a UX practitioner, paying more monthly to deploy a website that offers a better UX to the site visitors but has little add-on value to the business is deemed unnecessary by the business owners. As such, the improved website still builds upon the Weebly website builder, instead of other website builders available in the market that offers greater flexibility in design. 👉 Click here to view the final product. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/google-mymaps",
    "title": "Google MyMaps",
    "body": "2019/12/07 - The Focus: Users who use the platform for their travel trips, which generally consists of three stages:  the initial brainstorming, creation of the trip itinerary and navigation during travel. Competitive Analysis: I looked into popular travel planning apps to understand what makes a travel planning app great. The three well-received apps I narrowed down in my research were Sygic Travel, TripAdvisor and TripIt.   The three popular travel planning apps I narrowed down in my research were Sygic Travel, TripAdvisor and TripItUnsurprisingly, each of these apps has a solid feature that sets it apart from other apps on the market:  Sygic Travel: Seamless GPS navigation with the travel itinerary TripAdvisor: Smart suggestions, readily available reviews and forums, ease of booking TripIt: One-stop depository of the travel itinerary and booking confirmationsThe Main Getaway: These apps are all itinerary-based, contrasting the GoogleMyMaps platform, which is layer-based. Even though allowing users to sort their saved places into different layers offers more customizability, this sorting process can be manual and tedious. User Research: To improve the platform, I needed to know why existing users were dissatisfied with Google MyMaps. App Ratings &amp; Reviews:  Screenshot of user reviews and ratings taken from the Google MyMaps app listing in the Google Play StoreGoogle MyMaps’s mobile app was only available for Android. Looking through the app listing in the Google Play Store, “the lack of integration with Google Maps” was common feedback I spotted (which echoed my brief experience with the platform). Qualitative Feedback: I also conducted a short online survey with 15-20 participants using SurveyMonkey to obtain more feedback on the platform. The feedback gathered could be summarised as such:  Survey responses collected on the Googe MyMaps desktop experienceInsights: After conducting the competitive analysis and user research, I summarised the user needs and frustrations in a user persona.   User persona summarising the needs and frustrations of a typical user using Google MyMaps for travel planningI also mapped out the user journey, splitting it into the three stages identified prior, and listed the opportunities for improvements accordingly for each.   User journey map detailing potential opportunities for improvements when using Google MyMaps for travel planningConceptualisation: It was clear to me at this point what the focus areas were for improving the platform, and they were to:  better the integration of the platform with Google Maps, optimise the platform for itinerary planning and improve the platform’s accessibility on mobile while travelling on the goWireframing: I started conceptualising improvements by first creating low-fi wireframes on pen and paper. 	 	 	  The Solution: My suggested improvements adhere to the approach outlined from my former analysis and apply to both the desktop and mobile platforms. Desktop:  Ease of adding locations directly to custom maps created in Google MyMaps from location listings in Google Maps.  Addition of trip-oriented data fields to alleviate other aspects of trip planning (e. g. Budgeting) Offering an alternate day itinerary view (on top of the existing layer view) of pinned locations in custom maps for travel planning    Suggested improvements for the Google MyMaps desktop platform. Mobile: For mobile, I propose to build Google MyMaps as a feature in the existing Google Maps mobile app. Users can then have full access to data available on Google Maps while referring to their itinerary when travelling on the go.     Suggested improvement for Google MyMaps on mobile: integrate it directly with the Google Maps mobile app. Evaluation: Areas for Improvement: My mobile solution assumes that mobile access is mainly for referencing the itinerary while navigating on the go during travel. However, this may be a skewed assumption since unpredictability is part and parcel of travel. One might have to adjust the itinerary by adding stops or even shift plans when needed. A more polished solution, therefore, would be required. Re-evaluating Assumptions: The basis of this case study focuses only on one particular user group on the platform; those who use it for their travel planning. However, Google MyMaps is also often used to present map data. It might not have been fair thus to only compare the platform with other travel planning apps since they do not share the same primary use case.   Re-evaluating Assumptions: Google MyMaps is not merely a travel planning platform, but also a means to visualise and present map dataℹ️ Updates on Google MyMaps: As of October 15, 2021, the My Maps app for Android devices has been shut down and removed from the Play Store. Only the web app is supported presently. "
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
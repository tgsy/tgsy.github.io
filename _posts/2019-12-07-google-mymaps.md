---
layout: post
title:  Improving Google MyMaps
categories: [Personal Project]
author: false
# tags: [Redesign]
image: assets/images/google-mymaps.png
number: "3"
summary: "Google MyMaps is an <b>online mapping platform</b> available on both <b>web and mobile</b>. It allows its users to create <b>custom maps and share them</b> for collaboration. A large user group are <b>travellers who use the app for travel planning and navigating on the go</b>. With a rising number of travel planning sites and apps, a redesign is overdue for the platform to stay competitive in the long run. 

In this personal project, I derived <b>three potential improvements</b> for the platform. I arrived at these solutions by <b>analysing other existing travel apps</b> and <b>conducting user research</b> to understand how Google MyMaps was lacking compared to its competitors. "
permalink: /google-mymaps
share: false
comments: false
rating: false
youtubeId1: iIXuqaPvaO8
youtubeId2: Zk6WJHvrs4c
image_sliders: 
  - slider
---

### The Focus

Users who use the platform for their travel trips, which generally consists of three stages:
1. the **initial brainstorming**,
2. **creation of the trip itinerary** and
3. **navigation** during travel.

### Competitive Analysis

I looked into popular travel planning apps to understand what makes a travel planning app great. The three well-received apps I narrowed down in my research were **Sygic Travel**, **TripAdvisor** and **TripIt**.

<figure>
  <img src="{{site.url}}/assets/images/google-mymaps-ca1.png" alt="The three popular travel planning apps I narrowed down in my research were Sygic Travel, TripAdvisor and TripIt."/>
  <figcaption>The three popular travel planning apps I narrowed down in my research were Sygic Travel, TripAdvisor and TripIt. Author / copyright holder: Tessa Goh</figcaption>
</figure>

Unsurprisingly, each of these apps has a solid feature that sets it apart from other apps on the market:
* **Sygic Travel**: Seamless GPS navigation with the travel itinerary
* **TripAdvisor**: Smart suggestions, readily available reviews and forums, ease of booking
* **TripIt**: One-stop depository of the travel itinerary and booking confirmations

#### The Main Getaway

These apps are all **itinerary-based**, contrasting the GoogleMyMaps platform, which is **layer-based**. Even though allowing users to sort their saved places into different layers offers more customizability, this sorting process can be **manual and tedious**. 

### User Research

To improve the platform, I needed to know why existing users were dissatisfied with Google MyMaps. 

#### App Ratings & Reviews

<figure>
  <img src="{{site.url}}/assets/images/google-mymaps-ur1.png" alt="Google MyMaps User Ratings taken from the Google Play Store"/>
  <figcaption>Screenshot of user reviews and ratings taken from the Google MyMaps app listing in the Google Play Store. Author / copyright holder: Tessa Goh</figcaption>
</figure>

Google MyMaps's mobile app was only available for Android. Looking through the app listing in the Google Play Store, **"the lack of integration with Google Maps"** was common feedback I spotted (which echoed my brief experience with the platform). 

### Qualitative Feedback

I also conducted a short online survey with 15-20 participants using SurveyMonkey to obtain more feedback on the platform. 

The feedback gathered could be summarised as such:

<figure>
  <img src="{{site.url}}/assets/images/google-mymaps-ur2.png" alt="Survey responses reflecting usage of Google MyMaps desktop platform"/>
  <figcaption>Survey responses collected on the Googe MyMaps desktop experience. Author / copyright holder: Tessa Goh</figcaption>
</figure>

### Insights

After conducting the competitive analysis and user research, I summarised the user needs and frustrations in a user persona.

<figure>
  <img src="{{site.url}}/assets/images/google-mymaps-persona.png" alt="User Persona summarising user needs and frustrations of a typical user using the platform for travel planning"/>
  <figcaption>User persona summarising the needs and frustrations of a typical user using Google MyMaps for travel planning. Author / copyright holder: Tessa Goh</figcaption>
</figure>

I also mapped out the user journey, splitting it into the three stages identified prior, and listed the opportunities for improvements accordingly for each.

<figure>
  <img src="{{site.url}}/assets/images/google-mymaps-userjourney.png" alt="User Journey Map detailing the opportunities for improvements for users using the platform for travel planning"/>
  <figcaption>User journey map detailing potential opportunities for improvements when using Google MyMaps for travel planning. Author / copyright holder: Tessa Goh</figcaption>
</figure>

### Conceptualisation

It was clear to me at this point what the focus areas were for improving the platform, and they were to:
1. better the **integration** of the platform with **Google Maps**,
2. **optimise** the platform for **itinerary planning** and
3. improve the platform's **accessibility on mobile** while travelling on the go

#### Wireframing
I started conceptualising improvements by first creating low-fi wireframes on pen and paper.

<div id="slider">
	
  <img src="{{site.url}}/assets/images/google-mymaps-wireframes_gm-integration.png" title="Low-fi wireframes I drew to kickstart my solutioning (1/3)" alt="Better the integration of Google MyMaps with Google Maps.">
	
  <img data-src="{{site.url}}/assets/images/google-mymaps-wireframes_trip.png" title="Low-fi wireframes I drew to kickstart my solutioning (2/3)" src="" alt="Optimise Google MyMaps for trip planning.">
	
  <img data-src="{{site.url}}/assets/images/google-mymaps-wireframes_mobile-accessibility.png" data-src-2x="" src="" title="Low-fi wireframes I drew to kickstart my solutioning (3/3)" alt="Improve Google MyMaps's mobile accessibility.">
  
</div>

<script src="{{ site.baseurl }}/bower_components/ideal-image-slider/ideal-image-slider.js"></script>
<script src="{{ site.baseurl }}/bower_components/ideal-image-slider/extensions/bullet-nav/iis-bullet-nav.js"></script>
<script src="{{ site.baseurl }}/bower_components/ideal-image-slider/extensions/captions/iis-captions.js"></script>

<script>
//new IdealImageSlider.Slider('#slider');
  var slider = new IdealImageSlider.Slider({
	selector: '#slider',
	//height: 400, // Required but can be set by CSS
	interval: 4000
});
  slider.addBulletNav();
  slider.addCaptions();
  slider.start();
</script>

### The Solution
My suggested improvements adhere to the approach outlined from my former analysis and apply to both the desktop and mobile platforms. 

#### Desktop
1. **Ease of adding locations** directly to custom maps created in Google MyMaps from location listings in Google Maps.
2. **Addition of trip-oriented data fields** to alleviate other aspects of trip planning (e.g. Budgeting)
3. **Offering an alternate day itinerary view** (on top of the existing layer view) of pinned locations in custom maps for travel planning 

<figure>
  {% include youtubePlayer.html id=page.youtubeId1 %}
  <figcaption>Suggested improvements for the Google MyMaps desktop platform. Copyright holder: Tessa Goh</figcaption>
</figure>

#### Mobile
For mobile, I propose to **build Google MyMaps as a feature in the existing Google Maps mobile app**. Users can then have full access to data available on Google Maps while referring to their itinerary when travelling on the go.

<figure>
  {% include youtubePlayer.html id=page.youtubeId2 %}
  <figcaption>Suggested improvement for Google MyMaps on mobile: integrate it directly with the Google Maps mobile app. Copyright holder: Tessa Goh</figcaption>
</figure>

<!-- #### Bonus: Integration with Smart Assistants (Google Assistant)
<figure>
  <img src="{{site.url}}/assets/images/google-mymaps-assistant.png" alt="Bonus: Integration with Smart Assistants (Google Assistant)"/>
  <figcaption>Bonus: Integration with Smart Assistants (Google Assistant). Author / copyright holder: Tessa Goh</figcaption>
</figure>

Reminders to leave for the airport to catch the flight, start the journey towards the next stop on the itinerary list and offer suggestions when something crops up. -->

### Evaluation

#### Areas for Improvement
My mobile solution **assumes that mobile access is mainly for referencing the itinerary while navigating on the go during travel.** However, this may be a skewed assumption since **unpredictability is part and parcel of travel**. One might have to adjust the itinerary by adding stops or even shift plans when needed. A more polished solution, therefore, would be required. 

#### Re-evaluating Assumptions

The basis of this case study **focuses only on one particular user group on the platform**; those who use it for their travel planning. However, **Google MyMaps is also often used to present map data**. It might not have been fair thus to only compare the platform with other travel planning apps since they **do not share the same primary use case.**

<figure>
  <img src="{{site.url}}/assets/images/google-mymaps-explore.png" alt="Re-evaluating Assumptions: Google MyMaps is not merely a travel planning platform"/>
  <figcaption>Re-evaluating Assumptions: Google MyMaps is not merely a travel planning platform. It is also often used to visualise and present map data. Author / copyright holder: Tessa Goh / Google MyMaps</figcaption>
</figure>


<div class="additional-notes">
<h4>ℹ️ Updates on Google MyMaps</h4>
<em>As of October 15, 2021, the My Maps app for Android devices has been shut down and removed from the Play Store. Only the web app is supported presently.</em>
</div>

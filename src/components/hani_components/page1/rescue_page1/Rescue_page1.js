import HeaderCard from '../rescueHeaderCard/RescueHeaderCard';
import Accordion from '../rescueAccordion/RescueAccordion';
import ImagesH from '../rescueImages/RescueImagesH';
import Page from '../rescuePage/RescuePage';
import StickyLinks from '../rescueStickyLinks/RescueStickyLinks';
// import "./HaniStyle.css"
import "./Rescue_page1.css";
function Hanis_page() {
  return (
    <>
<div id="body">
    <div classNameName="lost-found-container">
      <ImagesH/>
      <StickyLinks/>
    </div>
    
    <HeaderCard
    link = "/lost"
      button = "Report your lost pet"
      section= "section_1"
      header = "Lost a pet? Act fast!"
      TitleHead= "Report" 
      descriptionHead = "Report your missing pet and search for a match on Petco Love Lost, a national lost and found database where shelters and neighbors post found pets. Petco Love Lost uses facial recognition technology, so make sure to upload a clear photoHead of your pet’s face!"
      photoHead = "fa-solid fa-camera  fa-2x"
 
      TitleHead1= "Look Around" 
      descriptionHead1 = "Look around the area where your pet was lost. Create LOST PET flyers and hang them as you walk around the neighborhood."
      photoHead1 = "fa-solid fa-magnifying-glass-location fa-2x"
 
      TitleHead2= "Check the Chip" 
     descriptionHead2 = "If your pet is microchipped, verify your contact information is up-to-date and inform the microchip company that your pet is lost."
     photoHead2 = "fa-solid fa-id-card-clip fa-2x"
 
     TitleHead3= "Share" 
     descriptionHead3 = "Share your Petco Love Lost flyer on social platforms, including your local lost and found pets Facebook groups."
     photoHead3 = "fa-solid fa-phone-volume fa-2x"
      />
 
 
 
      <HeaderCard
      link = "/found"
      button = "Report a found pet" 
      section= "section_2"
       header = "Found a pet? Help get them home!"
       TitleHead= "Report the Pet" 
       descriptionHead = "Report the found pet and search Petco Love Lost, a national lost and found database where pets are reported as lost to our shelters. Petco Love Lost uses facial recognition technology, so make sure to upload a clear photo of the pet’s face!"
       photoHead = "fa-solid fa-camera  fa-2x"
  
       TitleHead1= "Check for ID Tags" 
       descriptionHead1 = "Check for tags on the pet’s collar and look for contact information. If there are no tags, take them to a vet or animal shelter to scan for a microchip."
       photoHead1 = "fa-solid fa-person fa-2x"
  
       TitleHead2= "Alert Your Community" 
      descriptionHead2 = "Walk or drive around the area  where you found the pet. Create  FOUND PET flyers and hang them in the neighborhood."
      photoHead2 = "fa-solid fa-id-card-clip fa-2x"
  
      TitleHead3= "Share" 
      descriptionHead3 = " Share your Petco Love Lost flyer on social platforms, including your local lost and found pets Facebook groups."
      photoHead3 = "fa-solid fa-phone-volume fa-2x"
      />
 
     <HeaderCard
     section= "section_3"
       header = "Outdoor cats might not be lost or stray!"
       TitleHead= "Healthy Cats" 
       descriptionHead = "If you come across a healthy cat in your neighborhood, don’t be too quick to assume it’s a stray or has been abandoned. The cat might belong to one of your neighbors and likes to explore the outdoors. Please note that Rafiq doesn’t accept healthy stray cats. We kindly recommend that you return the cat to where you found it so it can easily find its way back home."
       photoHead = "fa-solid fa-paw fa-2x"
  
       TitleHead1= "Sick or Injured Cats" 
       descriptionHead1 = "If you spot a cat that is visibly sick or injured, please email CommunityCats@palRafiq.org so we can determine if the cat needs assistance and, if so, how to provide it. Do not try to handle or physically restrain an aggressive or fearful cat."
       photoHead1 = "fa-solid fa-kit-medical fa-2x"
  
       TitleHead2= "Still Unsure" 
      descriptionHead2 = "If you’re still unsure if the cat is lost or abandoned, check for a tipped ear, collar, or microchip (at a shelter or vet clinic). If they have a tipped ear, you’ve found a community cat! It means they live outdoors, have a caretaker, and have been sterilized and vaccinated. If the cat has a collar or tags, consider contacting the owner to find the cat’s home."
      photoHead2 = "fa-solid fa-question fa-2x"
  
      TitleHead3= "Report" 
      descriptionHead3 = "You can always report the cat as found on Petco Love Lost to ensure word gets out that this cat is roaming your neighborhood. If you contact an owner or a community cat caretaker, you can remove the listing from Petco Love Lost later."
      photoHead3 = "fa-solid fa-camera  fa-2x"
      />
             <div className ="relative-accordion" section id="section_4">
                  <div className= "postion-absulute-1">
                   <Page/>
                   </div>
                <div className= "postion-absulute">
                  {/* <div className="col-md-6-p-4"> */}
                    <div className="accordion" id="detailsAccordion">
                      <Accordion
                       buttonContant="Microchip"
                       pContant="Microchips with up-to-date info are essential! If your lost pet is brought to any shelter or veterinary office, they will scan for a microchip and contact you! Here at Rafeeq, 
                      we reunite hundreds of animals yearly because of microchips! If your pet is not microchipped, please have one implanted immediately! If your pet is microchipped, call the company to ensure the info is up-to-date. A microchip MUST be updated manually every time you move or change your contact info. "
                      />
                        <Accordion
                          buttonContant="  Have Details and a Photo Ready"
                          pContant="Always keep updated information and a recent photo of your pet in case they go missing."
                        />
                        <Accordion
                          buttonContant="Collars, Tags, and Leashes"
                          pContant="Ensure your pets are wearing proper identification and are kept safe with leashes."
                         />
                         <Accordion
                          buttonContant="Dog License"
                          pContant=" A dog license ensures your pet is easily identifiable by local authorities."
                          />
                         <Accordion
                          buttonContant="Protective Barriers"
                          pContant=" Use protective barriers to keep pets safe indoors or in secured outdoor areas."
                        />
                    </div>
                  </div>
                {/* </div> */}
             </div>
</div>
</>
  );
}

export default Hanis_page;

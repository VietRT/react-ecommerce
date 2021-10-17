import annualPlan from '../images/12_Month_Plan.PNG';
import monthlyPlan from '../images/1_Month_CheckIn_Plan.PNG';
import cookBook from '../images/Ryans_CookBook.PNG';
import customTShirt from '../images/Ryans_CustomTShirt.PNG';

const slideshowData= [
  {
    id: 0,
    img: annualPlan,
    productName: "Annual Coaching Pack",
    price: "$299.99/YEAR",
    description: "You'll received a training plan made specifically for you with a recipe book that includes 50 different recipes made for you to keep your diet in check.",
  },
  {
    id: 1,
    img: monthlyPlan,
    productName: "Subscription-based Coaching",
    price: "29.99/MONTH",
    description: "You will receive monthly emails from me with a recommendations on how you should train based on your physique and some recipes to incorporate for that month."
  },
  {
    id: 2,
    img: cookBook,
    productName: "Ryan's 2021 Cook Book",
    price: "49.99",
    description: "My 2021 Cook Book containing all the recipes I use to keep my stomache full and calories low"
  },
  {
    id: 3,
    img: customTShirt,
    productName: "Ryan's Custom T-Shirt with Logo",
    price: "19.99",
    description: "Custom T-Shirt with logo printed"
  }
]

export default slideshowData;
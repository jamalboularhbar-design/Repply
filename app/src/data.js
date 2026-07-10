// Business + vertical presets — verbatim from the design handoff.
export const BUSINESS_NAME = "Luna Coffee Roasters";
export const ACCENT = "#6c63ff";

export const TONES = ["Warm", "Professional", "Brief"];

export const VERTICALS = [
  {
    id: "cafe",
    label: "☕ Café & restaurant",
    platforms: ["Google Business Profile", "Yelp", "Tripadvisor", "Instagram"],
    trigger: "2 hours after checkout",
    rival: "Verve Coffee",
    rivalRate: "19 / mo",
    revenueImpact: "$600–900",
    shareables: [
      { quote: "Best flat white in the neighborhood, hands down.", name: "Deniz K.", platform: "Yelp", cardBg: "linear-gradient(135deg, #6c63ff, #3a2f8f)", caption: "Caption: \"Deniz said it best ☕️ Come find out why. Link in bio to book a table.\" #LocalCoffee" },
      { quote: "The baristas remember my order and my name.", name: "Priya S.", platform: "Google", cardBg: "linear-gradient(135deg, #ff9f5a, #ff6584)", caption: "Caption: \"This is why we do it ❤️ Thank you Priya! Tag someone who needs their coffee order remembered.\"" },
      { quote: "Cozy space and great pastries.", name: "Jonah P.", platform: "Google", cardBg: "linear-gradient(135deg, #2fe6a8, #1a8f6a)", caption: "Caption: \"Cozy corner, warm pastries, your new Tuesday spot. 🥐\"" },
    ],
    staff: [
      { name: "Youssef (barista)", initials: "YB", count: 14, stars: "★★★★★" },
      { name: "Amira (counter)", initials: "AC", count: 9, stars: "★★★★★" },
      { name: "Sami (roaster)", initials: "SR", count: 5, stars: "★★★★☆" },
    ],
    rankRows: [
      { keyword: "coffee near me", rank: 4, rankColor: "#f4c55a", delta: "▲ 1", deltaColor: "#43e97b", leader: "Verve Coffee", leaderNote: "2.1× your review velocity" },
      { keyword: "best latte downtown", rank: 2, rankColor: "#43e97b", delta: "—", deltaColor: "#4a4a6a", leader: "Verve Coffee", leaderNote: "38 more reviews than you" },
      { keyword: "coffee shop wifi", rank: 7, rankColor: "#ff6584", delta: "▼ 2", deltaColor: "#ff6584", leader: "Grind House", leaderNote: "mentions 'wifi' in 12 reviews" },
    ],
  },
  {
    id: "barber",
    label: "💈 Barber & beauty",
    platforms: ["Google Business Profile", "Booksy", "Fresha", "Instagram"],
    trigger: "30 min after the appointment ends",
    rival: "Kings Cuts",
    rivalRate: "14 / mo",
    revenueImpact: "$900–1,400",
    shareables: [
      { quote: "Karim gave me the best fade I've had in years.", name: "Yassine T.", platform: "Google", cardBg: "linear-gradient(135deg, #6c63ff, #2b2467)", caption: "Caption: \"Fresh cuts, happy clients 💈 Book with Karim — link in bio.\"" },
      { quote: "Lina's color work is unreal, exactly what I asked for.", name: "Sara M.", platform: "Instagram", cardBg: "linear-gradient(135deg, #ff6584, #b23a56)", caption: "Caption: \"Color goals ✨ Ask for Lina at your next visit.\"" },
    ],
    staff: [
      { name: "Karim (senior barber)", initials: "KB", count: 22, stars: "★★★★★" },
      { name: "Lina (color specialist)", initials: "LC", count: 16, stars: "★★★★★" },
      { name: "Yassine (junior barber)", initials: "YJ", count: 6, stars: "★★★★☆" },
    ],
    rankRows: [
      { keyword: "barber near me", rank: 3, rankColor: "#f4c55a", delta: "▲ 2", deltaColor: "#43e97b", leader: "Kings Cuts", leaderNote: "1.6× your review velocity" },
      { keyword: "best fade downtown", rank: 1, rankColor: "#43e97b", delta: "—", deltaColor: "#4a4a6a", leader: "you", leaderNote: "defend it — #2 is 12 reviews behind" },
      { keyword: "beard trim", rank: 5, rankColor: "#ff6584", delta: "▼ 1", deltaColor: "#ff6584", leader: "Kings Cuts", leaderNote: "mentions 'beard' in 9 reviews" },
    ],
  },
  {
    id: "shop",
    label: "🛍️ Shop & retail",
    platforms: ["Google Business Profile", "Facebook", "Trustpilot"],
    trigger: "1 day after purchase",
    rival: "Maison Nour",
    rivalRate: "11 / mo",
    revenueImpact: "$400–700",
    shareables: [
      { quote: "A shop with so much charm — I bought a handmade bag and loved the story behind it.", name: "Carmen L.", platform: "Google", cardBg: "linear-gradient(135deg, #e3b341, #8a5a12)", caption: "Caption: \"Every piece has a story 💛 Thank you Carmen! Shop the collection — link in bio.\"" },
    ],
    staff: [
      { name: "Nadia (owner)", initials: "NO", count: 11, stars: "★★★★★" },
      { name: "Reda (sales)", initials: "RS", count: 4, stars: "★★★★☆" },
    ],
    rankRows: [
      { keyword: "gift shop near me", rank: 4, rankColor: "#f4c55a", delta: "▲ 1", deltaColor: "#43e97b", leader: "Maison Nour", leaderNote: "1.3× your review velocity" },
      { keyword: "boutique downtown", rank: 2, rankColor: "#43e97b", delta: "▲ 3", deltaColor: "#43e97b", leader: "Maison Nour", leaderNote: "21 more reviews than you" },
      { keyword: "handmade jewelry", rank: 6, rankColor: "#ff6584", delta: "—", deltaColor: "#4a4a6a", leader: "Atelier Mina", leaderNote: "mentions 'handmade' in 15 reviews" },
    ],
  },
  {
    id: "fitness",
    label: "🧘 Fitness & spa",
    platforms: ["Google Business Profile", "Mindbody", "ClassPass", "Treatwell"],
    trigger: "after their 3rd visit",
    rival: "CorePower Studio",
    rivalRate: "22 / mo",
    revenueImpact: "$1,200–1,800",
    shareables: [
      { quote: "Sofia pushed me further than I thought I could go, in the best way.", name: "Nora H.", platform: "Google", cardBg: "linear-gradient(135deg, #2fe6a8, #14614a)", caption: "Caption: \"Stronger every week 💪 Book a session with Sofia — link in bio.\"" },
      { quote: "Marc's massage fixed a knot in my shoulder that's been there for months.", name: "Ali R.", platform: "Treatwell", cardBg: "linear-gradient(135deg, #7cc4ff, #2b5c8f)", caption: "Caption: \"Relief you can feel ✨ Ask for Marc at your next visit.\"" },
    ],
    staff: [
      { name: "Sofia (lead trainer)", initials: "ST", count: 27, stars: "★★★★★" },
      { name: "Marc (massage therapist)", initials: "MT", count: 19, stars: "★★★★★" },
      { name: "Ines (front desk)", initials: "IF", count: 8, stars: "★★★★☆" },
    ],
    rankRows: [
      { keyword: "gym near me", rank: 6, rankColor: "#ff6584", delta: "▼ 1", deltaColor: "#ff6584", leader: "CorePower Studio", leaderNote: "2.4× your review velocity" },
      { keyword: "day spa", rank: 3, rankColor: "#f4c55a", delta: "▲ 1", deltaColor: "#43e97b", leader: "Serenity Spa", leaderNote: "44 more reviews than you" },
      { keyword: "massage downtown", rank: 4, rankColor: "#f4c55a", delta: "—", deltaColor: "#4a4a6a", leader: "Serenity Spa", leaderNote: "mentions 'massage' in 31 reviews" },
    ],
  },
  {
    id: "club",
    label: "🍸 Bar & club",
    platforms: ["Google Business Profile", "Instagram", "Facebook"],
    trigger: "next morning at 11:00",
    rival: "Sky Lounge",
    rivalRate: "16 / mo",
    revenueImpact: "$1,500–2,300",
    shareables: [
      { quote: "Karim's cocktails are next level — best rooftop in the city.", name: "Farah D.", platform: "Instagram", cardBg: "linear-gradient(135deg, #c084fc, #5c2b8f)", caption: "Caption: \"Best seat in the city 🍸 See you this weekend — link in bio to reserve.\"" },
    ],
    staff: [
      { name: "Karim (head bartender)", initials: "KH", count: 18, stars: "★★★★★" },
      { name: "Dounia (DJ booking)", initials: "DD", count: 7, stars: "★★★★☆" },
    ],
    rankRows: [
      { keyword: "rooftop bar", rank: 2, rankColor: "#43e97b", delta: "▲ 1", deltaColor: "#43e97b", leader: "Sky Lounge", leaderNote: "1.8× your review velocity" },
      { keyword: "clubs downtown", rank: 5, rankColor: "#ff6584", delta: "▼ 2", deltaColor: "#ff6584", leader: "Velvet Room", leaderNote: "posts events daily on Instagram" },
      { keyword: "cocktail bar near me", rank: 3, rankColor: "#f4c55a", delta: "—", deltaColor: "#4a4a6a", leader: "Sky Lounge", leaderNote: "29 more reviews than you" },
    ],
  },
  {
    id: "riad",
    label: "🕌 Riad & boutique hotel",
    platforms: ["Google Business Profile", "Booking.com", "Tripadvisor", "Airbnb"],
    trigger: "morning of checkout",
    rival: "Dar Zaman",
    rivalRate: "23 / mo",
    revenueImpact: "$2,000–3,500",
    shareables: [
      { quote: "Breakfast on the rooftop with the Atlas mountains in the distance — worth the trip alone.", name: "Claire D.", platform: "Tripadvisor", cardBg: "linear-gradient(135deg, #e3b341, #b25c12)", caption: "Caption: \"Sunrise, mint tea, the Atlas on the horizon ☀️ Book your rooftop morning — link in bio.\"" },
      { quote: "Rachid treated us like family from the moment we walked in.", name: "Sofia A.", platform: "Google", cardBg: "linear-gradient(135deg, #6c63ff, #3a2f8f)", caption: "Caption: \"This is Moroccan hospitality ❤️ Shukran Sofia — we can't wait to welcome you back.\"" },
    ],
    staff: [
      { name: "Rachid (host & concierge)", initials: "RH", count: 31, stars: "★★★★★" },
      { name: "Fatima (housekeeping)", initials: "FH", count: 12, stars: "★★★★★" },
      { name: "Youssef (driver)", initials: "YD", count: 8, stars: "★★★★☆" },
    ],
    rankRows: [
      { keyword: "riad marrakech medina", rank: 3, rankColor: "#f4c55a", delta: "▲ 1", deltaColor: "#43e97b", leader: "Dar Zaman", leaderNote: "1.9× your review velocity" },
      { keyword: "boutique hotel marrakech", rank: 5, rankColor: "#ff6584", delta: "▼ 1", deltaColor: "#ff6584", leader: "Riad Yasmine", leaderNote: "312 more reviews than you" },
      { keyword: "best rooftop view marrakech", rank: 1, rankColor: "#43e97b", delta: "—", deltaColor: "#4a4a6a", leader: "you", leaderNote: "defend it — #2 is 9 reviews behind" },
    ],
  },
];

export const getVertical = (id) => VERTICALS.find((v) => v.id === id) || VERTICALS[0];

// Sample review datasets per vertical — verbatim from the design handoff.
const REVIEWS = {
  riad: [
    { id: "h1", platform: "Booking.com", pc: "#7cc4ff", rating: 2, name: "Tom H.", time: "3h ago", sentiment: "neg", text: "We booked the rooftop suite months ahead and were moved to a smaller courtyard room on arrival. Staff were apologetic, but nobody warned us before we landed." },
    { id: "h2", platform: "Tripadvisor", pc: "#34e0a1", rating: 5, name: "Claire D.", time: "7h ago", sentiment: "pos", text: "Breakfast on the rooftop with the Atlas mountains in the distance — worth the trip alone. Fatima kept our room absolutely spotless all week." },
    { id: "h3", platform: "Airbnb", pc: "#ff6584", rating: 5, name: "Élodie M.", time: "1d ago", sentiment: "pos", lang: "FR", text: "Un riad magnifique au cœur de la médina. Rachid nous a reçus comme sa propre famille — thé à la menthe à l'arrivée et conseils précieux chaque matin." },
    { id: "h4", platform: "Google", pc: "#3ad6e0", rating: 1, name: "Daniel R.", time: "2d ago", sentiment: "neg", text: "The AC in our room was broken during a 40-degree week. They brought fans, but at this price the room should have been fixed or swapped the same day." },
    { id: "h5", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Khalid A.", time: "3d ago", sentiment: "pos", lang: "AR", text: "رياض جميل في قلب المدينة القديمة، هدوء تام رغم قربه من ساحة جامع الفنا. يوسف أوصلنا من المطار وكان دليلاً رائعاً في أزقة المدينة." },
    { id: "h6", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Sofia A.", time: "4d ago", sentiment: "pos", replied: true, text: "Rachid treated us like family from the moment we walked in. By day two the whole staff knew our names and how we take our coffee." },
  ],
  barber: [
    { id: "b1", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Yassine E.", time: "3h ago", sentiment: "pos", text: "Walked in without an appointment on a Saturday and Karim still squeezed me in. Cleanest fade I've had in years, honestly." },
    { id: "b2", platform: "Booksy", pc: "#3ad6e0", rating: 2, name: "Marcus D.", time: "7h ago", sentiment: "neg", text: "Second time my 6pm slot started at 6:40. The cut itself is good, but I book ahead for a reason. Not sure I'll be back." },
    { id: "b3", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Omar R.", time: "1d ago", sentiment: "pos", lang: "AR", text: "أفضل حلاق في الحي، دقيق في التفاصيل والاستقبال دائماً محترم. أنصح به بشدة." },
    { id: "b4", platform: "Fresha", pc: "#6c63ff", rating: 4, name: "Théo L.", time: "2d ago", sentiment: "pos", lang: "FR", text: "Très bon dégradé, ambiance sympa. Juste un peu d'attente même avec réservation." },
    { id: "b5", platform: "Google", pc: "#3ad6e0", rating: 1, name: "Jake P.", time: "3d ago", sentiment: "neg", text: "Asked for a light trim, walked out with half my beard gone. Guy barely listened to what I wanted." },
    { id: "b6", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Sofia M.", time: "4d ago", sentiment: "pos", replied: true, text: "Took my son for his first haircut and they were so patient with him. The little certificate at the end was a cute touch." },
  ],
  shop: [
    { id: "s1", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Hannah G.", time: "4h ago", sentiment: "pos", text: "Found the perfect gift in five minutes because the owner actually asked who it was for. Wrapped it beautifully too, no charge." },
    { id: "s2", platform: "Trustpilot", pc: "#43e97b", rating: 2, name: "K. Osman", time: "8h ago", sentiment: "neg", text: "Ordered online for pickup, got there and the item had been sold to someone else. Offered a refund but no real apology." },
    { id: "s3", platform: "Google", pc: "#3ad6e0", rating: 4, name: "Marta S.", time: "1d ago", sentiment: "pos", text: "Lovely little shop, fair prices. Gets crowded on Saturdays so go early." },
    { id: "s4", platform: "Facebook", pc: "#6c63ff", rating: 5, name: "Rachida B.", time: "2d ago", sentiment: "pos", lang: "FR", text: "Boutique magnifique, des pièces qu'on ne trouve nulle part ailleurs. La propriétaire est adorable." },
    { id: "s5", platform: "Trustpilot", pc: "#43e97b", rating: 3, name: "Dana W.", time: "3d ago", sentiment: "neu", text: "Beautiful things but the card machine has been \"down\" twice now. Cash only feels strange in 2026." },
    { id: "s7", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Carmen L.", time: "4d ago", sentiment: "pos", lang: "ES", text: "Una tienda con muchísimo encanto. Compré un bolso hecho a mano y la dueña me contó la historia de la artesana que lo hizo." },
    { id: "s6", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Leo V.", time: "5d ago", sentiment: "pos", replied: true, text: "Bought a ring here last month, the band snapped, they fixed it same day for free. That's how you keep customers." },
  ],
  fitness: [
    { id: "f1", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Nora H.", time: "2h ago", sentiment: "pos", text: "The 7am spin class is the only reason I get out of bed. Instructors know everyone's name." },
    { id: "f2", platform: "ClassPass", pc: "#f4c55a", rating: 2, name: "Tim B.", time: "6h ago", sentiment: "neg", text: "Showers were cold again this week and two treadmills still \"out of order\". Paying premium prices for this." },
    { id: "f3", platform: "Mindbody", pc: "#ff9f5a", rating: 4, name: "Aya K.", time: "1d ago", sentiment: "pos", lang: "FR", text: "Très bon studio, cours de yoga excellents. Le vestiaire mériterait un petit rafraîchissement." },
    { id: "f4", platform: "Google", pc: "#3ad6e0", rating: 1, name: "Derek M.", time: "2d ago", sentiment: "neg", text: "Signed up on a promo, cancelling took three emails and a phone call. Gym itself is fine, the admin is a nightmare." },
    { id: "f5", platform: "Treatwell", pc: "#ff6584", rating: 5, name: "Lina S.", time: "3d ago", sentiment: "pos", replied: true, text: "The deep tissue massage with Yousra fixed a shoulder that's bothered me for months." },
    { id: "f6", platform: "Google", pc: "#3ad6e0", rating: 4, name: "Paul C.", time: "4d ago", sentiment: "pos", text: "Solid equipment, never too crowded after 8pm. Wifi in the lounge is patchy." },
  ],
  club: [
    { id: "c1", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Maya R.", time: "10h ago", sentiment: "pos", text: "Rooftop at sunset is unreal. Cocktails on the pricey side but honestly worth it for the view." },
    { id: "c2", platform: "Google", pc: "#3ad6e0", rating: 2, name: "Anthony J.", time: "1d ago", sentiment: "neg", text: "Waited 45 minutes at the door with a reservation while promoters walked their groups straight in. Inside was great — the door situation ruined the night." },
    { id: "c3", platform: "Facebook", pc: "#6c63ff", rating: 4, name: "Selim T.", time: "2d ago", sentiment: "pos", lang: "FR", text: "Très belle soirée, DJ excellent. Le service au bar était un peu lent vers minuit." },
    { id: "c4", platform: "Google", pc: "#3ad6e0", rating: 1, name: "Priti N.", time: "3d ago", sentiment: "neg", text: "Got charged for a bottle we never ordered. Still waiting on the refund a week later." },
    { id: "c5", platform: "Google", pc: "#3ad6e0", rating: 5, name: "Jonas F.", time: "4d ago", sentiment: "pos", replied: true, text: "Birthday table was sorted perfectly, staff brought the cake out exactly at midnight like we asked." },
  ],
  cafe: [
    { id: 1, platform: "Google", pc: "#3ad6e0", rating: 2, name: "Mara T.", time: "2h ago", sentiment: "neg", text: "Waited 25 minutes for a latte on a quiet Tuesday. Staff were friendly but clearly understaffed. The coffee itself was great, which makes the wait more frustrating." },
    { id: 2, platform: "Yelp", pc: "#ff6584", rating: 5, name: "Deniz K.", time: "5h ago", sentiment: "pos", text: "Best flat white in the neighborhood, hands down. The rotating single-origin menu keeps me coming back every week." },
    { id: 9, platform: "Tripadvisor", pc: "#34e0a1", rating: 5, name: "Amine B.", time: "9h ago", sentiment: "pos", lang: "FR", text: "Un accueil chaleureux et un espresso parfait. Le personnel est adorable — on reviendra à chaque visite dans le quartier !" },
    { id: 3, platform: "Google", pc: "#3ad6e0", rating: 4, name: "Jonah P.", time: "1d ago", sentiment: "pos", text: "Cozy space and great pastries. Wifi dropped a couple of times while I was working, otherwise perfect." },
    { id: 4, platform: "Facebook", pc: "#6c63ff", rating: 1, name: "R. Alvarez", time: "1d ago", sentiment: "neg", text: "Ordered a birthday cake pickup and it wasn't ready at the promised time. Had to wait 40 minutes with guests arriving. Really disappointed." },
    { id: 5, platform: "Google", pc: "#3ad6e0", rating: 5, name: "Priya S.", time: "2d ago", sentiment: "pos", replied: true, text: "The baristas remember my order and my name. Little things like that make this my favorite spot in the city." },
    { id: 6, platform: "Yelp", pc: "#ff6584", rating: 3, name: "Tom W.", time: "3d ago", sentiment: "neu", text: "Good coffee, but seating is limited on weekends. Would love more outdoor tables in summer." },
    { id: 7, platform: "Google", pc: "#3ad6e0", rating: 5, name: "Lena M.", time: "4d ago", sentiment: "pos", replied: true, text: "Their oat milk cortado is unreal. Also appreciate the compostable cups!" },
    { id: 8, platform: "Facebook", pc: "#6c63ff", rating: 4, name: "Sam O.", time: "5d ago", sentiment: "pos", text: "Great vibe for meetings. Music volume is just right. Espresso could be a touch hotter." },
  ],
};

export const getReviews = (vertical) => REVIEWS[vertical] || REVIEWS.cafe;

export const starStr = (n) => "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);

// Draft generation: sentiment × tone × language — verbatim from the design handoff.
export function makeDraft(r, tone, biz = BUSINESS_NAME) {
  const name = r.name.split(" ")[0];
  if (r.lang === "FR") {
    if (tone === "Professional") return `Bonjour ${name}, merci pour votre retour. Toute l'équipe de ${biz} a été ravie de vous accueillir. Au plaisir de vous revoir.`;
    if (tone === "Brief") return `Merci ${name}, à très vite.`;
    return `Bonjour ${name}, merci beaucoup — votre message a fait plaisir à toute l'équipe. Vous avez raison pour l'attente, on travaille dessus. À bientôt.`;
  }
  if (r.lang === "ES") {
    if (tone === "Professional") return `Hola ${name}, muchas gracias por tus palabras. Nos alegra que fuera una buena visita — te esperamos pronto.`;
    if (tone === "Brief") return `¡Gracias ${name} — hasta pronto!`;
    return `Hola ${name}, tu reseña nos alegró el día a todo el equipo — gracias de verdad. Nos vemos en la próxima.`;
  }
  if (r.lang === "AR") {
    if (tone === "Professional") return `شكراً جزيلاً ${name} على كلماتك الطيبة. سعدنا بزيارتك ونتطلع لاستقبالك مجدداً.`;
    if (tone === "Brief") return `شكراً ${name} — نراك قريباً.`;
    return `أهلاً ${name}، كلماتك أسعدت الفريق كله، شكراً من القلب. ننتظر زيارتك القادمة.`;
  }
  if (r.sentiment === "neg") {
    if (tone === "Professional") return `Hi ${name}, thank you for the feedback. This falls short of the standard we hold ourselves to at ${biz}. We've reviewed what went wrong and would like to make it right — please reach out to us directly.`;
    if (tone === "Brief") return `Hi ${name} — fair criticism, and we're fixing it. We'd like the chance to make it right.`;
    return `Hi ${name} — I'm sorry, that's on us. Thanks for telling us straight instead of just not coming back. Next time you're in, ask for me and I'll make sure it goes right.`;
  }
  if (r.sentiment === "neu") {
    if (tone === "Professional") return `Hi ${name}, thank you for the balanced feedback. The point you raised is fair and it's being worked on.`;
    if (tone === "Brief") return `Thanks ${name} — fair point, we're on it.`;
    return `Hi ${name}, thanks for keeping it honest — you're right, and it's already on our list. Hope we can earn that last star from you next time.`;
  }
  if (tone === "Professional") return `Hi ${name}, thank you for the kind words. We're glad it was a good visit, and we look forward to the next one.`;
  if (tone === "Brief") return `Thanks ${name} — see you soon.`;
  return `Hi ${name}, this genuinely made our week. Thanks for taking the minute to write it — see you next time.`;
}

export const WEEK_DATA = [
  { label: "W1", v: 4.0 }, { label: "W2", v: 4.3 }, { label: "W3", v: 3.8 }, { label: "W4", v: 4.1 },
  { label: "W5", v: 4.4 }, { label: "W6", v: 4.2 }, { label: "W7", v: 3.9 }, { label: "W8", v: 4.5 },
];

export const INSIGHT_STATS = (accent) => [
  { label: "Avg rating", value: "4.2 ★", color: "#f4c55a", delta: "+0.3 vs prev" },
  { label: "New reviews", value: "38", color: "#3ad6e0", delta: "+9 vs prev" },
  { label: "Response rate", value: "62%", color: accent, delta: "goal 90%" },
  { label: "Median response", value: "9h", color: "#43e97b", delta: "−4h vs prev" },
];

export const INSIGHT_KEYWORDS = [
  { label: "latte art +12", color: "#43e97b" },
  { label: "friendly staff +9", color: "#43e97b" },
  { label: "pastries +7", color: "#43e97b" },
  { label: "wait time −8", color: "#ff6584" },
  { label: "seating −4", color: "#f4c55a" },
  { label: "wifi −2", color: "#f4c55a" },
];

export const REQ_STATS = (accent) => [
  { label: "Invites sent", value: "142", color: accent, delta: "this month" },
  { label: "Left a review", value: "47", color: "#43e97b", delta: "33% conversion" },
  { label: "Private notes", value: "11", color: "#ff6584", delta: "handled directly" },
];

export const INTERCEPTED = [
  { name: "Anonymous", time: "1d ago", text: "Music was way too loud around noon, couldn't hear my friend across the table." },
  { name: "Kerem A.", time: "3d ago", text: "Card machine was down and I had no cash — almost left without ordering. Please fix it." },
];

export const DEFAULT_INVITE_MSG = "Thanks for stopping by Luna Coffee Roasters! Got 30 seconds to tell us how it went? {link}";

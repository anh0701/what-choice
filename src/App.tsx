import { useState } from "react";
import Home from "./pages/Home/Home";
import Random from "./pages/Random/Random";
import Cook from "./pages/Cook/Cook";
import Takeaway from "./pages/Takeaway/Takeaway";
import Delivery from "./pages/Delivery/Delivery";

function App() {
  const [screen, setScreen] = 
    useState<"home" | "random" | "cook" | "takeaway" | "delivery">("home");

  return (
    <>
      {
        screen === "home" && <Home 
          onRandom={() => setScreen("random")} 
          onCook={() => setScreen("cook")}
          onTakeaway={() => setScreen("takeaway")}
          onDelivery={() => setScreen("delivery")}
        />}

      {screen === "random" && <Random onBack={() => setScreen("home")} />}
      {screen === "cook" && <Cook onBack={() => setScreen("home")} />}
      {screen === "takeaway" && <Takeaway onBack={() => setScreen("home")} />}
      {screen === "delivery" && <Delivery onBack={() => setScreen("home")} />}
      
    </>
  );
}

export default App;

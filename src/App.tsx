import Home from "./pages/Home/Home";

function App() {
  // const [screen, setScreen] = 
  //   useState<"home" | "random" | "cook" | "takeaway" | "delivery">("home");

  return (
    <>
    <Home></Home>
      {/* {
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
       */}
    </>
  );
}

export default App;

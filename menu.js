// JAVASCRIPT



// ===== CART DROPDOWN (edit games and prices HERE only) =====
const GAMES = [
    { name: "Counter-Strike 2", price: 0 },
    { name: "Valorant", price: 0 },
    { name: "League Of Legends", label: "League of Legends", price: 0 },
    { name: "Dota 2", price: 0 },
    { name: "Minecraft: Java Edition", price: 1499 },
    { name: "Grand Theft Auto V", price: 1499 },
    { name: "Red Dead Redemption 2", price: 1999 },
    { name: "Black Myth: Wukong", price: 2999 },
    { name: "The Witcher 3: Wild Hunt", price: 999 },
    { name: "God of War Ragnarök", price: 2999 },
    { name: "TEKKEN 8", price: 2999 },
    { name: "Outlast", price: 499 },
    { name: "Terraria", price: 299 },
    { name: "Left 4 Dead 2", price: 199 },
    { name: "Resident Evil 4", price: 2399 },
    { name: "Mobile Legends: Bang Bang", price: 0 },
    { name: "Genshin Impact", price: 0 },
    { name: "Honkai: Star Rail", price: 0 },
    { name: "PUBG Mobile", price: 0 },
    { name: "Call of Duty: Mobile", price: 0 },
    { name: "Free Fire", price: 0 },
    { name: "Clash of Clans", price: 0 },
    { name: "Clash Royale", price: 0 },
    { name: "Roblox", price: 0 },
    { name: "Blood Strike", price: 0 },
    { name: "WarDogs", price: 499 },
    { name: "REPO", price: 399 },
    { name: "Among Us", price: 99 },
    { name: "Dead By Daylight", label: "Dead by Daylight", price: 799 },
    { name: "Clive Barker's Hellraiser: Revival", price: 2499 },
    { name: "Brawl Stars", price: 0 }
];

function loadCartDropdown() {
    const mount = document.querySelector(".nav-dropdown");
    if (!mount) return; // page without a cart

    const items = GAMES.map(function (game) {
        const priceText = game.price === 0
            ? "Free"
            : "₱" + game.price.toLocaleString("en-PH");

        return '<label><input type="checkbox" value="' + game.name +
            '" data-price="' + game.price + '"> ' +
            (game.label || game.name) + " — " + priceText + "</label>";
    }).join("");

    mount.innerHTML = `
        <button type="button"
                class="cart-toggle"
                onclick="toggleCart()"
                aria-expanded="false"
                id="cartToggle">
            Cart ▼
            <span id="cartCount">0</span>
        </button>

        <div class="dropdown-menu" id="cartDropdown">
            ${items}

            <div class="cart-total">
                Total:
                <strong id="cartTotal">₱0.00</strong>
            </div>

            <button type="button"
                    class="checkout-btn"
                    onclick="goToCheckout()">
                Checkout
            </button>
        </div>
    `;
}

loadCartDropdown();



        const sideMenu = document.getElementById("sideMenu");
        const menuButton = document.querySelector(".menu");

        function openMenu() {
            sideMenu.classList.add("active");
            menuButton.setAttribute("aria-expanded", "true");
        }

        function closeMenu() {
            sideMenu.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        }

        document.addEventListener("click", function (event) {
            if (
                sideMenu.classList.contains("active") &&
                !sideMenu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        function checkout() {
            const selectedGames = document.querySelectorAll(
                '.dropdown-menu input[name="cart"]:checked'
            );

            if (selectedGames.length === 0) {
                alert("Please select at least one game before checkout.");
                return;
            }

            const games = Array.from(selectedGames).map(function (checkbox) {
                return checkbox.value;
            });

            sessionStorage.setItem("nexusCart", JSON.stringify(games));
            window.location.href = "cart.html";
        }

        function searchGames(event) {
            event.preventDefault();

            const searchValue = document.getElementById("searchInput").value.trim();
            const gameCards = document.querySelectorAll(".game-card");

            if (searchValue === "") {
                gameCards.forEach(function (card) {
                    card.style.display = "";
                });
                return;
            }

            const query = searchValue.toLowerCase();
            let found = false;

            gameCards.forEach(function (card) {
                const gameName = card.dataset.name.toLowerCase();
                const matches = gameName.includes(query);

                card.style.display = matches ? "" : "none";

                if (matches) {
                    found = true;
                }
            });

            if (!found) {
                alert("No games found matching: " + searchValue);
            }
        }

        // Support searches submitted from the home page.
        const searchParams = new URLSearchParams(window.location.search);
        const initialSearch = searchParams.get("search");

        if (initialSearch) {
            document.getElementById("searchInput").value = initialSearch;
            const query = initialSearch.toLowerCase();

            document.querySelectorAll(".game-card").forEach(function (card) {
                card.style.display = card.dataset.name.toLowerCase().includes(query)
                    ? ""
                    : "none";
            });
        }



        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         // HAMBURGER MENU


        const menuBackdrop = document.getElementById("menuBackdrop");

        function openMenu() {
            sideMenu.classList.add("active");
            menuBackdrop.classList.add("active");
            menuButton.setAttribute("aria-expanded", "true");
        }

        function closeMenu() {
            sideMenu.classList.remove("active");
            menuBackdrop.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        }

        function toggleMenu() {
            if (sideMenu.classList.contains("active")) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        // CART DROPDOWN
        const cartDropdown = document.getElementById("cartDropdown");
        const cartToggle = document.getElementById("cartToggle");

        function toggleCart() {
            const isOpen = cartDropdown.classList.toggle("active");
            cartToggle.setAttribute("aria-expanded", String(isOpen));
        }

        // CART CHECKBOXES
        const cartCheckboxes = document.querySelectorAll(
            '#cartDropdown input[type="checkbox"]'
        );

        // SELECTED GAME DISPLAY
        const gameDisplay = document.getElementById("gameDisplay");
        const displayTitle = document.getElementById("displayTitle");

        // AVAILABLE TRAILERS
        const gameTrailers = {
            "Grand Theft Auto V": "hvoD7ehZPcM",
            "Black Myth: Wukong": "u83VdXAVq08"
        };

        // DISPLAY THE SELECTED GAME ON THE HOME PAGE
        function updateGameDisplay() {
            const selectedGames = Array.from(cartCheckboxes).filter(
                function(item) {
                    return item.checked;
                }
            );

            // CLEAR THE PAGE IF NO GAME IS SELECTED
            gameDisplay.innerHTML = "";
            displayTitle.textContent = "";

            if (selectedGames.length === 0) {
                return;
            }

            displayTitle.textContent = "Your Selected Games";

            // DISPLAY ALL SELECTED GAMES
            selectedGames.forEach(function(selectedGame) {
                const gameName = selectedGame.value;
                const gamePrice = Number(selectedGame.dataset.price || 0);

                const card = document.createElement("article");
                card.className = "news-card";

                // SHOW TRAILER WHEN AVAILABLE
                if (gameTrailers[gameName]) {
                    const iframe = document.createElement("iframe");

                    iframe.src =
                        "https://www.youtube.com/embed/" +
                        gameTrailers[gameName] + "?mute=1";

                    iframe.title = gameName + " trailer";
                    iframe.loading = "lazy";
                    iframe.allow =
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                    iframe.allowFullscreen = true;

                    card.appendChild(iframe);
                }

                // GAME NAME
                const heading = document.createElement("h3");
                heading.textContent = gameName;
                card.appendChild(heading);

                // GAME PRICE
                const price = document.createElement("p");

                price.textContent = gamePrice === 0
                    ? "Price: Free"
                    : "Price: ₱" + gamePrice.toLocaleString("en-PH", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });

                card.appendChild(price);
                gameDisplay.appendChild(card);
            });
        }

        // UPDATE TOTAL AND CART COUNT
        function updateCartTotal() {
            let total = 0;
            let count = 0;

            cartCheckboxes.forEach(function(item) {
                if (item.checked) {
                    total += Number(item.dataset.price || 0);
                    count++;
                }
            });

            document.getElementById("cartTotal").textContent =
                "₱" + total.toLocaleString("en-PH", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });

            document.getElementById("cartCount").textContent = count;
        }

        // UPDATE WHEN A GAME IS SELECTED OR DESELECTED
        cartCheckboxes.forEach(function(item) {
            item.addEventListener("change", function() {
                updateCartTotal();
                updateGameDisplay();
            });
        });

        // START WITH AN EMPTY GAME DISPLAY
        updateCartTotal();
        updateGameDisplay();

        // CHECKOUT
        function goToCheckout() {
            const selectedGames = [];

            cartCheckboxes.forEach(function(item) {
                if (item.checked) {
                    selectedGames.push({
                        name: item.value,
                        price: Number(item.dataset.price || 0)
                    });
                }
            });

            if (selectedGames.length === 0) {
                alert("Your cart is empty! Please select a game first.");
                return;
            }

            // SAVE CART FOR PAYMENT PAGE
            localStorage.setItem(
                "nexusCart",
                JSON.stringify(selectedGames)
            );

            // SAVE TOTAL
            const total = selectedGames.reduce(function(sum, game) {
                return sum + game.price;
            }, 0);

            localStorage.setItem("nexusTotal", String(total));

            // OPEN PAYMENT PAGE
            window.location.href = "payment.html";
        }

        // SEARCH: SEND THE SEARCH TERM TO THE BROWSE PAGE
        document.getElementById("searchForm").addEventListener(
            "submit",
            function(event) {
                event.preventDefault();

                const searchTerm =
                    document.getElementById("searchInput").value.trim();

                if (searchTerm !== "") {
                    window.location.href =
                        "browse.html?search=" +
                        encodeURIComponent(searchTerm);
                } else {
                    window.location.href = "browse.html";
                }
            }
        );

        // CLOSE CART WHEN CLICKING OUTSIDE IT
        document.addEventListener("click", function(event) {
            const dropdownContainer =
                document.querySelector(".nav-dropdown");

            if (!dropdownContainer.contains(event.target)) {
                cartDropdown.classList.remove("active");
                cartToggle.setAttribute("aria-expanded", "false");
            }
        });

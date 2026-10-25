// JAVASCRIPT
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
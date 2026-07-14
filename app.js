// ==================== DATA ====================

const ingredientsDatabase = {
    tomato: { name: "Tomato", emoji: "🍅", calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2 },
    onion: { name: "Onion", emoji: "🧅", calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1, fiber: 1.7 },
    garlic: { name: "Garlic", emoji: "🧄", calories: 149, protein: 6.4, carbs: 33.1, fat: 0.5, fiber: 2.1 },
    pepper: { name: "Bell Pepper", emoji: "🫑", calories: 31, protein: 1, carbs: 6, fat: 0.3, fiber: 2.1 },
    carrot: { name: "Carrot", emoji: "🥕", calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, fiber: 2.8 },
    potato: { name: "Potato", emoji: "🥔", calories: 77, protein: 2, carbs: 17, fat: 0.1, fiber: 2.2 },
    broccoli: { name: "Broccoli", emoji: "🥦", calories: 34, protein: 2.8, carbs: 7, fat: 0.4, fiber: 2.6 },
    mushroom: { name: "Mushroom", emoji: "🍄", calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, fiber: 1 },
    chicken: { name: "Chicken", emoji: "🍗", calories: 239, protein: 27, carbs: 0, fat: 14, fiber: 0 },
    egg: { name: "Egg", emoji: "🥚", calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0 },
    cheese: { name: "Cheese", emoji: "🧀", calories: 402, protein: 25, carbs: 1.3, fat: 33, fiber: 0 },
    rice: { name: "Rice", emoji: "🍚", calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4 },
    bread: { name: "Bread", emoji: "🍞", calories: 265, protein: 9, carbs: 49, fat: 3.2, fiber: 2.7 },
    pasta: { name: "Pasta", emoji: "🍝", calories: 131, protein: 5, carbs: 25, fat: 1.1, fiber: 1.8 },
    lettuce: { name: "Lettuce", emoji: "🥬", calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2, fiber: 1.3 },
    lemon: { name: "Lemon", emoji: "🍋", calories: 29, protein: 1.1, carbs: 9.3, fat: 0.3, fiber: 2.8 },
    apple: { name: "Apple", emoji: "🍎", calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4 },
    banana: { name: "Banana", emoji: "🍌", calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6 },
    avocado: { name: "Avocado", emoji: "🥑", calories: 160, protein: 2, carbs: 9, fat: 15, fiber: 7 },
    olive: { name: "Olive", emoji: "🫒", calories: 115, protein: 1, carbs: 6, fat: 11, fiber: 3.3 }
};

const recipesDatabase = [
    {
        id: 1,
        title: "Classic Tomato Pasta",
        emoji: "🍝",
        time: 25,
        servings: 4,
        difficulty: "Easy",
        tags: ["quick", "budget"],
        ingredients: ["tomato", "garlic", "pasta", "onion", "olive"],
        steps: [
            "Bring a large pot of salted water to boil and cook pasta according to package directions.",
            "While pasta cooks, dice tomatoes and mince garlic and onion.",
            "Heat olive oil in a pan and sauté onion until translucent.",
            "Add garlic and cook for 30 seconds until fragrant.",
            "Add diced tomatoes, salt, pepper, and simmer for 10 minutes.",
            "Drain pasta and toss with sauce. Serve hot."
        ]
    },
    {
        id: 2,
        title: "Veggie Stir Fry",
        emoji: "🥦",
        time: 15,
        servings: 2,
        difficulty: "Easy",
        tags: ["quick", "healthy", "vegetarian"],
        ingredients: ["broccoli", "carrot", "mushroom", "pepper", "garlic"],
        steps: [
            "Slice all vegetables into bite-sized pieces.",
            "Heat oil in a wok or large pan over high heat.",
            "Add garlic and stir for 30 seconds.",
            "Add carrots and broccoli, stir fry for 3 minutes.",
            "Add mushrooms and bell pepper, cook for 2 more minutes.",
            "Season with soy sauce and serve over rice."
        ]
    },
    {
        id: 3,
        title: "Chicken Omelette",
        emoji: "🍳",
        time: 10,
        servings: 1,
        difficulty: "Easy",
        tags: ["quick", "healthy"],
        ingredients: ["egg", "chicken", "cheese", "pepper", "onion"],
        steps: [
            "Shred or dice cooked chicken into small pieces.",
            "Whisk eggs with salt and pepper.",
            "Heat a non-stick pan over medium heat.",
            "Pour in eggs and let set slightly.",
            "Add chicken, cheese, and diced onion to one half.",
            "Fold omelette and cook until cheese melts."
        ]
    },
    {
        id: 4,
        title: "Loaded Baked Potato",
        emoji: "🥔",
        time: 45,
        servings: 2,
        difficulty: "Easy",
        tags: ["budget"],
        ingredients: ["potato", "cheese", "broccoli", "egg"],
        steps: [
            "Preheat oven to 400°F (200°C).",
            "Wash and poke potatoes with a fork.",
            "Bake for 40-45 minutes until tender.",
            "Steam broccoli florets until tender.",
            "Slice potatoes open and fluff with a fork.",
            "Top with broccoli, cheese, and a fried egg."
        ]
    },
    {
        id: 5,
        title: "Fresh Garden Salad",
        emoji: "🥗",
        time: 10,
        servings: 2,
        difficulty: "Easy",
        tags: ["quick", "healthy", "vegetarian", "budget"],
        ingredients: ["lettuce", "tomato", "carrot", "avocado"],
        steps: [
            "Wash and chop lettuce into bite-sized pieces.",
            "Dice tomatoes and slice carrots.",
            "Slice avocado.",
            "Toss all vegetables in a large bowl.",
            "Drizzle with olive oil and lemon juice.",
            "Season with salt and pepper to taste."
        ]
    },
    {
        id: 6,
        title: "Mushroom Risotto",
        emoji: "🍄",
        time: 35,
        servings: 3,
        difficulty: "Medium",
        tags: ["healthy", "vegetarian"],
        ingredients: ["mushroom", "rice", "onion", "garlic", "cheese"],
        steps: [
            "Heat broth in a saucepan and keep warm.",
            "Sauté diced onion in butter until soft.",
            "Add mushrooms and garlic, cook for 5 minutes.",
            "Add rice and toast for 2 minutes.",
            "Add warm broth one ladle at a time, stirring constantly.",
            "When rice is creamy and al dente, stir in cheese and serve."
        ]
    },
    {
        id: 7,
        title: "Garlic Bread Pizza",
        emoji: "🍕",
        time: 20,
        servings: 2,
        difficulty: "Easy",
        tags: ["quick", "budget"],
        ingredients: ["bread", "tomato", "cheese", "garlic", "pepper"],
        steps: [
            "Preheat oven to 425°F (220°C).",
            "Slice bread in half lengthwise.",
            "Mix minced garlic with olive oil and brush on bread.",
            "Spread tomato sauce on each half.",
            "Top with cheese and sliced peppers.",
            "Bake for 10-12 minutes until cheese is bubbly."
        ]
    },
    {
        id: 8,
        title: "Banana Pancakes",
        emoji: "🥞",
        time: 15,
        servings: 2,
        difficulty: "Easy",
        tags: ["quick", "vegetarian"],
        ingredients: ["banana", "egg", "bread"],
        steps: [
            "Mash bananas in a bowl.",
            "Beat eggs and mix with bananas.",
            "Tear bread into small pieces and add to mixture.",
            "Heat a non-stick pan over medium heat.",
            "Pour batter to form small pancakes.",
            "Cook until bubbles form, then flip and cook until golden."
        ]
    },
    {
        id: 9,
        title: "Avocado Toast",
        emoji: "🥑",
        time: 5,
        servings: 1,
        difficulty: "Easy",
        tags: ["quick", "healthy", "vegetarian"],
        ingredients: ["avocado", "bread", "egg", "lemon"],
        steps: [
            "Toast bread until golden and crispy.",
            "Mash avocado with lemon juice, salt, and pepper.",
            "Spread avocado mixture on toast.",
            "Top with a fried or poached egg.",
            "Season with red pepper flakes if desired.",
            "Serve immediately."
        ]
    },
    {
        id: 10,
        title: "Chicken Rice Bowl",
        emoji: "🍛",
        time: 30,
        servings: 2,
        difficulty: "Medium",
        tags: ["healthy"],
        ingredients: ["chicken", "rice", "carrot", "broccoli", "garlic"],
        steps: [
            "Cook rice according to package directions.",
            "Dice chicken and season with spices.",
            "Sauté garlic until fragrant.",
            "Add chicken and cook until golden.",
            "Add diced carrots and cook for 5 minutes.",
            "Steam broccoli and assemble bowls."
        ]
    },
    {
        id: 11,
        title: "Caprese Salad",
        emoji: "🍅",
        time: 5,
        servings: 2,
        difficulty: "Easy",
        tags: ["quick", "healthy", "vegetarian"],
        ingredients: ["tomato", "cheese", "lemon", "olive"],
        steps: [
            "Slice tomatoes and mozzarella into equal thickness.",
            "Arrange alternating slices on a plate.",
            "Drizzle with olive oil and lemon juice.",
            "Season with salt and fresh pepper.",
            "Add fresh basil if available.",
            "Serve immediately as an appetizer."
        ]
    },
    {
        id: 12,
        title: "Egg Fried Rice",
        emoji: "🍳",
        time: 15,
        servings: 2,
        difficulty: "Easy",
        tags: ["quick", "budget"],
        ingredients: ["rice", "egg", "carrot", "garlic", "onion"],
        steps: [
            "Use day-old cold rice for best results.",
            "Heat oil in a wok over high heat.",
            "Scramble eggs and set aside.",
            "Sauté garlic and onion until fragrant.",
            "Add diced carrots and cook for 2 minutes.",
            "Add rice, eggs, and soy sauce. Toss to combine."
        ]
    }
];

// ==================== STATE ====================

let state = {
    stream: null,
    capturedImage: null,
    detectedIngredients: [],
    savedRecipes: JSON.parse(localStorage.getItem('savedRecipes') || '[]'),
    currentFilter: 'all'
};

// ==================== DOM ELEMENTS ====================

const elements = {
    video: document.getElementById('video'),
    canvas: document.getElementById('canvas'),
    capturedImage: document.getElementById('capturedImage'),
    capturedImg: document.getElementById('capturedImg'),
    cameraPlaceholder: document.getElementById('cameraPlaceholder'),
    startCamera: document.getElementById('startCamera'),
    captureBtn: document.getElementById('captureBtn'),
    retakeBtn: document.getElementById('retakeBtn'),
    analyzeBtn: document.getElementById('analyzeBtn'),
    ingredientsResult: document.getElementById('ingredientsResult'),
    ingredientsList: document.getElementById('ingredientsList'),
    findRecipes: document.getElementById('findRecipes'),
    recipesGrid: document.getElementById('recipesGrid'),
    recipeSearch: document.getElementById('recipeSearch'),
    nutritionEmpty: document.getElementById('nutritionEmpty'),
    nutritionContent: document.getElementById('nutritionContent'),
    totalCalories: document.getElementById('totalCalories'),
    totalProtein: document.getElementById('totalProtein'),
    totalCarbs: document.getElementById('totalCarbs'),
    totalFat: document.getElementById('totalFat'),
    nutritionDetails: document.getElementById('nutritionDetails'),
    savedEmpty: document.getElementById('savedEmpty'),
    savedList: document.getElementById('savedList'),
    recipeModal: document.getElementById('recipeModal'),
    modalBody: document.getElementById('modalBody'),
    closeModal: document.getElementById('closeModal'),
    loadingOverlay: document.getElementById('loadingOverlay')
};

// ==================== CAMERA FUNCTIONS ====================

async function startCameraStream() {
    try {
        state.stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
        });
        elements.video.srcObject = state.stream;
        elements.cameraPlaceholder.style.display = 'none';
        elements.startCamera.style.display = 'none';
        elements.captureBtn.disabled = false;
    } catch (err) {
        alert('Unable to access camera. Please ensure you have granted camera permissions.');
        console.error('Camera error:', err);
    }
}

function captureImage() {
    const video = elements.video;
    const canvas = elements.canvas;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    
    const imageData = canvas.toDataURL('image/jpeg');
    state.capturedImage = imageData;
    
    elements.capturedImg.src = imageData;
    elements.video.style.display = 'none';
    elements.capturedImage.style.display = 'block';
    
    if (state.stream) {
        state.stream.getTracks().forEach(track => track.stop());
    }
    
    elements.captureBtn.style.display = 'none';
    elements.retakeBtn.style.display = 'inline-flex';
    elements.analyzeBtn.style.display = 'inline-flex';
}

function retakePhoto() {
    elements.video.style.display = 'block';
    elements.capturedImage.style.display = 'none';
    elements.captureBtn.style.display = 'inline-flex';
    elements.retakeBtn.style.display = 'none';
    elements.analyzeBtn.style.display = 'none';
    elements.ingredientsResult.style.display = 'none';
    state.capturedImage = null;
    state.detectedIngredients = [];
    
    startCameraStream();
}

// ==================== INGREDIENT DETECTION ====================

async function analyzeIngredients() {
    elements.loadingOverlay.style.display = 'flex';
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const ingredientKeys = Object.keys(ingredientsDatabase);
    const numIngredients = Math.floor(Math.random() * 4) + 2;
    const shuffled = ingredientKeys.sort(() => 0.5 - Math.random());
    state.detectedIngredients = shuffled.slice(0, numIngredients);
    
    renderIngredients();
    updateNutrition();
    
    elements.loadingOverlay.style.display = 'none';
    elements.ingredientsResult.style.display = 'block';
}

function renderIngredients() {
    elements.ingredientsList.innerHTML = state.detectedIngredients.map(key => {
        const ing = ingredientsDatabase[key];
        return `<span class="ingredient-tag"><span>${ing.emoji}</span> ${ing.name}</span>`;
    }).join('');
}

// ==================== NUTRITION ====================

function updateNutrition() {
    if (state.detectedIngredients.length === 0) {
        elements.nutritionEmpty.style.display = 'block';
        elements.nutritionContent.style.display = 'none';
        return;
    }
    
    elements.nutritionEmpty.style.display = 'none';
    elements.nutritionContent.style.display = 'block';
    
    let totals = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
    
    state.detectedIngredients.forEach(key => {
        const ing = ingredientsDatabase[key];
        totals.calories += ing.calories;
        totals.protein += ing.protein;
        totals.carbs += ing.carbs;
        totals.fat += ing.fat;
        totals.fiber += ing.fiber;
    });
    
    const avg = state.detectedIngredients.length;
    elements.totalCalories.textContent = Math.round(totals.calories / avg);
    elements.totalProtein.textContent = (totals.protein / avg).toFixed(1);
    elements.totalCarbs.textContent = (totals.carbs / avg).toFixed(1);
    elements.totalFat.textContent = (totals.fat / avg).toFixed(1);
    
    elements.nutritionDetails.innerHTML = state.detectedIngredients.map(key => {
        const ing = ingredientsDatabase[key];
        return `
            <div class="nutrition-item">
                <span class="nutrition-item-name">${ing.emoji} ${ing.name}</span>
                <span class="nutrition-item-value">${ing.calories} kcal / 100g</span>
            </div>
        `;
    }).join('');
}

// ==================== RECIPES ====================

function getFilteredRecipes() {
    let filtered = [...recipesDatabase];
    
    const searchTerm = elements.recipeSearch.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
        );
    }
    
    if (state.currentFilter !== 'all') {
        filtered = filtered.filter(recipe => recipe.tags.includes(state.currentFilter));
    }
    
    return filtered;
}

function getRecipesWithIngredients() {
    if (state.detectedIngredients.length === 0) return getFilteredRecipes();
    
    const scored = recipesDatabase.map(recipe => {
        const matchCount = recipe.ingredients.filter(ing => 
            state.detectedIngredients.includes(ing)
        ).length;
        return { ...recipe, matchCount };
    });
    
    let filtered = scored.filter(r => r.matchCount > 0);
    
    const searchTerm = elements.recipeSearch.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
        );
    }
    
    if (state.currentFilter !== 'all') {
        filtered = filtered.filter(recipe => recipe.tags.includes(state.currentFilter));
    }
    
    if (filtered.length === 0) return getFilteredRecipes();
    
    return filtered.sort((a, b) => b.matchCount - a.matchCount);
}

function renderRecipes() {
    const recipes = getRecipesWithIngredients();
    
    if (recipes.length === 0) {
        elements.recipesGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <p>No recipes found</p>
            </div>
        `;
        return;
    }
    
    elements.recipesGrid.innerHTML = recipes.map(recipe => {
        const isSaved = state.savedRecipes.some(r => r.id === recipe.id);
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <div class="recipe-image">${recipe.emoji}</div>
                <div class="recipe-info">
                    <div class="recipe-title">${recipe.title}</div>
                    <div class="recipe-meta">
                        <span><i class="fas fa-clock"></i> ${recipe.time}m</span>
                        <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                    </div>
                    <div class="recipe-tags">
                        ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const recipeId = parseInt(card.dataset.id);
            const recipe = recipesDatabase.find(r => r.id === recipeId);
            openRecipeModal(recipe);
        });
    });
}

function openRecipeModal(recipe) {
    const isSaved = state.savedRecipes.some(r => r.id === recipe.id);
    
    elements.modalBody.innerHTML = `
        <div class="modal-recipe-image">${recipe.emoji}</div>
        <div class="modal-recipe-content">
            <div class="modal-recipe-title">${recipe.title}</div>
            <div class="modal-recipe-meta">
                <span><i class="fas fa-clock"></i> ${recipe.time} min</span>
                <span><i class="fas fa-user-friends"></i> ${recipe.servings} servings</span>
                <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
            </div>
            
            <div class="modal-section">
                <h4><i class="fas fa-carrot"></i> Ingredients</h4>
                <ul class="modal-ingredients-list">
                    ${recipe.ingredients.map(key => {
                        const ing = ingredientsDatabase[key];
                        return `<li>${ing.emoji} ${ing.name}</li>`;
                    }).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h4><i class="fas fa-list-ol"></i> Instructions</h4>
                <ol class="modal-steps">
                    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            
            <div class="modal-actions">
                <button class="btn ${isSaved ? 'btn-secondary' : 'btn-primary'}" id="saveRecipeBtn">
                    <i class="fas fa-heart"></i>
                    ${isSaved ? 'Saved' : 'Save Recipe'}
                </button>
                <button class="btn btn-accent" id="shareRecipeBtn">
                    <i class="fas fa-share-alt"></i>
                    Share
                </button>
            </div>
        </div>
    `;
    
    elements.recipeModal.style.display = 'flex';
    
    document.getElementById('saveRecipeBtn').addEventListener('click', () => {
        toggleSaveRecipe(recipe);
        openRecipeModal(recipe);
    });
    
    document.getElementById('shareRecipeBtn').addEventListener('click', () => {
        shareRecipe(recipe);
    });
}

function toggleSaveRecipe(recipe) {
    const index = state.savedRecipes.findIndex(r => r.id === recipe.id);
    if (index > -1) {
        state.savedRecipes.splice(index, 1);
    } else {
        state.savedRecipes.push(recipe);
    }
    localStorage.setItem('savedRecipes', JSON.stringify(state.savedRecipes));
    renderSavedRecipes();
}

function shareRecipe(recipe) {
    if (navigator.share) {
        navigator.share({
            title: recipe.title,
            text: `Check out this recipe: ${recipe.title}`,
            url: window.location.href
        });
    } else {
        alert('Recipe link copied to clipboard!');
    }
}

// ==================== SAVED RECIPES ====================

function renderSavedRecipes() {
    if (state.savedRecipes.length === 0) {
        elements.savedEmpty.style.display = 'block';
        elements.savedList.innerHTML = '';
        return;
    }
    
    elements.savedEmpty.style.display = 'none';
    elements.savedList.innerHTML = state.savedRecipes.map(recipe => `
        <div class="saved-recipe" data-id="${recipe.id}">
            <div class="saved-recipe-image">${recipe.emoji}</div>
            <div class="saved-recipe-info">
                <div class="saved-recipe-title">${recipe.title}</div>
                <div class="saved-recipe-meta">
                    <i class="fas fa-clock"></i> ${recipe.time} min • ${recipe.difficulty}
                </div>
            </div>
            <div class="saved-recipe-actions">
                <button class="btn-icon love" title="Remove from saved">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.saved-recipe').forEach(card => {
        const recipeId = parseInt(card.dataset.id);
        
        card.querySelector('.saved-recipe-image, .saved-recipe-info').addEventListener('click', () => {
            const recipe = recipesDatabase.find(r => r.id === recipeId);
            if (recipe) openRecipeModal(recipe);
        });
        
        card.querySelector('.btn-icon').addEventListener('click', (e) => {
            e.stopPropagation();
            const recipe = recipesDatabase.find(r => r.id === recipeId);
            if (recipe) {
                toggleSaveRecipe(recipe);
            }
        });
    });
}

// ==================== TAB NAVIGATION ====================

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
    
    if (tabName === 'recipes') renderRecipes();
    if (tabName === 'saved') renderSavedRecipes();
    if (tabName === 'nutrition') updateNutrition();
}

// ==================== EVENT LISTENERS ====================

elements.startCamera.addEventListener('click', startCameraStream);
elements.captureBtn.addEventListener('click', captureImage);
elements.retakeBtn.addEventListener('click', retakePhoto);
elements.analyzeBtn.addEventListener('click', analyzeIngredients);
elements.findRecipes.addEventListener('click', () => switchTab('recipes'));
elements.closeModal.addEventListener('click', () => {
    elements.recipeModal.style.display = 'none';
});
elements.recipeModal.addEventListener('click', (e) => {
    if (e.target === elements.recipeModal) {
        elements.recipeModal.style.display = 'none';
    }
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

document.querySelectorAll('.filter-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        state.currentFilter = tag.dataset.filter;
        renderRecipes();
    });
});

elements.recipeSearch.addEventListener('input', renderRecipes);

elements.cameraPlaceholder.addEventListener('click', startCameraStream);

// ==================== INIT ====================

renderRecipes();
renderSavedRecipes();

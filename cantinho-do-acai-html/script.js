const WHATSAPP_NUMBER = "555185868972";
const PIX_KEY = "58137537000188";
const BUSINESS_HOURS = { start: "08:30", end: "19:30" };


const DATA = {
  categories: [
    { id: "acai", label: "Açaí" },
    { id: "garrafa", label: "Açaí na Garrafa" },
    { id: "pastel", label: "Pastel" }
  ],
  products: [
    {
      id: "garrafa-300",
      category: "garrafa",
      title: "Açaí na Garrafa - 300ml",
      description: "Açaí cremoso, geladinho e pronto para beber.",
      price: 20,
      image: "garrafa.png",
      buttonLabel: "Personalizar",
      type: "garrafa",
      config: {
        freeLimit: 3,
        paidLimit: 4,
        freeOptions: [
          "Leite condensado",
          "Leite em pó",
          "Banana",
          "MM's (Disquete)",
          "Paçoca",
          "Chocoball",
          "Granola"
        ],
        paidOptions: [
          { name: "Farinha láctea", price: 3 },
          { name: "Ovomaltine", price: 3 },
          { name: "Sucrilhos", price: 3 },
          { name: "Morango", price: 4 },
          { name: "Kiwi", price: 3 },
          { name: "Creme de avelã", price: 4 },
          { name: "Creme de chocolate branco", price: 4 },
          { name: "Creme de limão", price: 4 },
          { name: "Creme de maracujá", price: 4 },
          { name: "Creme de morango", price: 4 },
          { name: "Creme Ninho", price: 4 },
          { name: "Granola", price: 2 },
          { name: "Bis", price: 5 },
          { name: "Mousse de maracujá", price: 6 },
          { name: "Mousse de morango", price: 6 },
          { name: "Oreo", price: 5 },
          { name: "Ovomaltine premium", price: 4 },
          { name: "Stikadinho", price: 3 }
        ]
      }
    },
    {
      id: "garrafa-500",
      category: "garrafa",
      title: "Açaí na Garrafa - 500ml",
      description: "Versão econômica para compartilhar.",
      price: 30,
      image: "garrafa.png",
      buttonLabel: "Personalizar",
      type: "garrafa",
      config: {
        freeLimit: 3,
        paidLimit: 4,
        freeOptions: [
          "Leite condensado",
          "Leite em pó",
          "Banana",
          "MM's (Disquete)",
          "Paçoca",
          "Chocoball",
          "Granola"
        ],
        paidOptions: [
          { name: "Farinha láctea", price: 3 },
          { name: "Ovomaltine", price: 3 },
          { name: "Sucrilhos", price: 3 },
          { name: "Morango", price: 4 },
          { name: "Kiwi", price: 3 },
          { name: "Creme de avelã", price: 4 },
          { name: "Creme de chocolate branco", price: 4 },
          { name: "Creme de limão", price: 4 },
          { name: "Creme de maracujá", price: 4 },
          { name: "Creme de morango", price: 4 },
          { name: "Creme Ninho", price: 4 },
          { name: "Granola", price: 2 },
          { name: "Bis", price: 5 },
          { name: "Mousse de maracujá", price: 6 },
          { name: "Mousse de morango", price: 6 },
          { name: "Oreo", price: 5 },
          { name: "Ovomaltine premium", price: 4 },
          { name: "Stikadinho", price: 3 }
        ]
      }
    },
    {
      id: "acai-200",
      category: "acai",
      title: "Açaí Tradicional - 200ml",
      description: "2 adicionais grátis incluídos.",
      price: 13,
      image: "copo.png",
      buttonLabel: "Escolher complementos",
      type: "acai",
      config: { freeIncluded: 2, paidLimit: 4 }
    },
    {
      id: "acai-300",
      category: "acai",
      title: "Açaí Tradicional - 300ml",
      description: "3 adicionais grátis incluídos.",
      price: 15,
      image: "copo.png",
      buttonLabel: "Escolher complementos",
      type: "acai",
      config: { freeIncluded: 3, paidLimit: 4 }
    },
    {
      id: "acai-500",
      category: "acai",
      title: "Açaí Tradicional - 500ml",
      description: "3 adicionais grátis incluídos.",
      price: 20,
      image: "copo.png",
      buttonLabel: "Escolher complementos",
      type: "acai",
      config: { freeIncluded: 3, paidLimit: 4 }
    },
    {
      id: "combo-acai-500",
      category: "acai",
      title: "Combo 2 Açaís Tradicionais - 500ml",
      description: "2 copos de 500ml com 3 adicionais grátis por copo.",
      price: 35,
      image: "copo.png",
      buttonLabel: "Escolher complementos",
      type: "acaiCombo",
      config: { quantity: 2, freeIncluded: 3, paidLimit: 4 }
    },
    {
      id: "acai-700",
      category: "acai",
      title: "Açaí Tradicional - 700ml",
      description: "4 adicionais grátis incluídos.",
      price: 30,
      image: "copo.png",
      buttonLabel: "Escolher complementos",
      type: "acai",
      config: { freeIncluded: 4, paidLimit: 4 }
    },
    {
      id: "pastel",
      category: "pastel",
      title: "Pastel",
      description: "Serve 1 pessoa. Escolha o sabor no momento do pedido.",
      price: 12,
      image: "pastel.png",
      buttonLabel: "Personalizar",
      type: "pastel"
    }
  ],
  acaiFreeOptions: [
    "Leite em pó",
    "Banana",
    "Leite condensado",
    "Paçoca",
    "Granola",
    "Sucrilhos",
    "Chocoball",
    "Disquete (MM's)"
  ],
  acaiPaidOptions: [
    { name: "Morango", price: 3 },
    { name: "Kiwi", price: 3 },
    { name: "Creme de avelã", price: 3 },
    { name: "Creme de chocolate", price: 3 },
    { name: "Creme de chocolate branco", price: 3 },
    { name: "Creme de morango", price: 3 },
    { name: "Creme de ninho", price: 3 },
    { name: "Creme de maracujá", price: 3 }
  ],
  pastelFlavors: ["Queijo", "Frango", "Calabresa", "Carne", "Chocolate"]
};

const state = {
  activeCategory: "acai",
  cart: [],
  currentProduct: null,
  modal: createModalState()
};

const elements = {
  tabs: document.getElementById("tabs"),
  products: document.getElementById("products"),
  customizerDrawer: document.getElementById("customizerDrawer"),
  customizerContent: document.getElementById("customizerContent"),
  checkoutDrawer: document.getElementById("checkoutDrawer"),
  checkoutSummary: document.getElementById("checkoutSummary"),
  cartBar: document.getElementById("cartBar"),
  cartBarText: document.getElementById("cartBarText"),
  openCheckoutBtn: document.getElementById("openCheckoutBtn"),
  checkoutForm: document.getElementById("checkoutForm"),
  copyPixBtn: document.getElementById("copyPixBtn"),
  copyPixBtnLabel: document.getElementById("copyPixBtnLabel"),
  toast: document.getElementById("toast")
};

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createAcaiSelectionState() {
  return {
    free: [],
    paid: [],
    discard: ""
  };
}

function createModalState(product = null) {
  return {
    free: [],
    paid: [],
    discard: "",
    notes: "",
    flavor: "",
    comboActive: 0,
    comboItems:
      product?.type === "acaiCombo"
        ? Array.from({ length: product.config.quantity }, () => createAcaiSelectionState())
        : []
  };
}

function getComboItemLabel(index) {
  return `Açaí ${index + 1}`;
}

function getActiveSelectionState() {
  const product = state.currentProduct;
  if (product?.type === "acaiCombo") {
    return state.modal.comboItems[state.modal.comboActive] || state.modal.comboItems[0] || createAcaiSelectionState();
  }

  return state.modal;
}

function getAcaiSelectionTotals(selection, config) {
  const currentSelection = selection || createAcaiSelectionState();
  const freeExtrasTotal = Math.max(0, currentSelection.free.length - config.freeIncluded) * 2;
  const paidExtrasTotal = currentSelection.paid.reduce((sum, name) => {
    const match = DATA.acaiPaidOptions.find((option) => option.name === name);
    return sum + (match?.price || 0);
  }, 0);

  return {
    freeExtrasTotal,
    paidExtrasTotal,
    total: freeExtrasTotal + paidExtrasTotal
  };
}

function renderAcaiOptionSections(selection, config) {
  const currentSelection = selection || createAcaiSelectionState();
  const freeExtraCount = Math.max(0, currentSelection.free.length - config.freeIncluded);

  return `
    <section class="modal-section">
      <h3>Complementos grátis (${currentSelection.free.length}/${config.freeIncluded} inclusos)</h3>
      <p>Extras além do limite incluso custam ${formatCurrency(2)} cada.</p>
      <div class="choice-grid choice-grid--compact">
        ${renderChoiceButtons(DATA.acaiFreeOptions, currentSelection.free, "free")}
      </div>
      <div class="counter-text">${
        freeExtraCount > 0 ? `${freeExtraCount} extra(s) cobrados acima do limite incluso.` : "Você ainda está dentro do limite grátis."
      }</div>
    </section>

    <section class="modal-section">
      <h3>Complementos pagos</h3>
      <p>Escolha até ${config.paidLimit} opções.</p>
      <div class="choice-grid choice-grid--compact">
        ${renderChoiceButtons(DATA.acaiPaidOptions, currentSelection.paid, "paid", true)}
      </div>
      <div class="counter-text">Selecionados: ${currentSelection.paid.length}/${config.paidLimit}</div>
    </section>

    <section class="modal-section">
      <h3>Colher obrigatória</h3>
      <p>Escolha 1 opção para o seu açaí.</p>
      <div class="choice-grid choice-grid--compact">
        ${renderChoiceButtons(["Sim", "Não"], currentSelection.discard ? [currentSelection.discard] : [], "discard")}
      </div>
    </section>
  `;
}


function getMinutesFromTime(value) {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}

function isOpenNow() {
  const now = new Date();
  const current = now.getHours() * 60 + now.getMinutes();
  const start = getMinutesFromTime(BUSINESS_HOURS.start);
  const end = getMinutesFromTime(BUSINESS_HOURS.end);
  return current >= start && current <= end;
}

function renderTabs() {
  elements.tabs.innerHTML = DATA.categories
    .map(
      (category) => `
        <button
          class="tab ${category.id === state.activeCategory ? "is-active" : ""}"
          type="button"
          data-category="${category.id}"
        >
          ${category.label}
        </button>
      `
    )
    .join("");
}

function renderProducts() {
  const visibleProducts = DATA.products.filter((product) => product.category === state.activeCategory);
  const isOpen = isOpenNow();

  elements.products.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <img class="product-card__image" src="${product.image}" alt="${escapeHtml(product.title)}" />
          <div class="product-card__body">
            <h3>${escapeHtml(product.title)}</h3>
            <p>${escapeHtml(product.description)}</p>
            <div class="product-card__price">${formatCurrency(product.price)}</div>
            <div class="product-card__actions">
              <button class="product-card__btn ${!isOpen ? "is-disabled" : ""}" type="button" data-product-id="${product.id}" ${!isOpen ? "disabled" : ""}>
                ${isOpen ? product.buttonLabel : "Fora do horário"}
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}


function openCustomizer(productId) {
  const product = DATA.products.find((item) => item.id === productId);
  if (!product) return;
  if (!isOpenNow()) {
    showToast(`Pedidos aceitos das ${BUSINESS_HOURS.start} às ${BUSINESS_HOURS.end}.`);
    return;
  }

  state.currentProduct = product;
  state.modal = createModalState(product);

  renderCustomizer();
  elements.customizerDrawer.classList.add("is-open");
  elements.customizerDrawer.setAttribute("aria-hidden", "false");
}

function closeCustomizer() {
  elements.customizerDrawer.classList.remove("is-open");
  elements.customizerDrawer.setAttribute("aria-hidden", "true");
}

function renderChoiceButtons(options, selectedValues, group, priced = false) {
  return options
    .map((option) => {
      const label = typeof option === "string" ? option : `${option.name} + ${formatCurrency(option.price)}`;
      const value = typeof option === "string" ? option : option.name;
      const isSelected = selectedValues.includes(value);
      return `
        <button
          class="choice-chip ${isSelected ? "is-selected" : ""}"
          type="button"
          data-choice-group="${group}"
          data-choice-value="${escapeHtml(value)}"
          ${priced ? 'data-choice-priced="true"' : ""}
        >
          ${escapeHtml(label)}
        </button>
      `;
    })
    .join("");
}

function getModalTotals() {
  const product = state.currentProduct;
  if (!product) return { paidExtrasTotal: 0, freeExtrasTotal: 0, total: 0 };

  let freeExtrasTotal = 0;
  let paidExtrasTotal = 0;

  if (product.type === "garrafa") {
    paidExtrasTotal = state.modal.paid.reduce((sum, name) => {
      const match = product.config.paidOptions.find((option) => option.name === name);
      return sum + (match?.price || 0);
    }, 0);
  }

  if (product.type === "acai") {
    const acaiTotals = getAcaiSelectionTotals(state.modal, product.config);
    freeExtrasTotal = acaiTotals.freeExtrasTotal;
    paidExtrasTotal = acaiTotals.paidExtrasTotal;
  }

  if (product.type === "acaiCombo") {
    const comboTotals = state.modal.comboItems.map((selection) => getAcaiSelectionTotals(selection, product.config));
    freeExtrasTotal = comboTotals.reduce((sum, item) => sum + item.freeExtrasTotal, 0);
    paidExtrasTotal = comboTotals.reduce((sum, item) => sum + item.paidExtrasTotal, 0);
    const total = product.price + freeExtrasTotal + paidExtrasTotal;
    return { paidExtrasTotal, freeExtrasTotal, total, comboTotals };
  }

  const total = product.price + freeExtrasTotal + paidExtrasTotal;
  return { paidExtrasTotal, freeExtrasTotal, total };
}

function renderCustomizer(options = {}) {
  const product = state.currentProduct;
  if (!product) return;
  const { scrollTop = 0 } = options;

  const totals = getModalTotals();
  const summaryTitle = product.type === "acaiCombo" ? "Resumo do combo" : "Resumo do item";
  let summaryLines = `
    <div class="summary-line"><span>Preço base:</span> <strong>${formatCurrency(product.price)}</strong></div>
    ${product.type === "acai" ? `<div class="summary-line"><span>Extras do limite grátis:</span> <strong>${formatCurrency(totals.freeExtrasTotal)}</strong></div>` : ""}
    <div class="summary-line"><span>Adicionais pagos:</span> <strong>${formatCurrency(totals.paidExtrasTotal)}</strong></div>
    <div class="summary-line"><span>Total do item:</span> <strong>${formatCurrency(totals.total)}</strong></div>
  `;

  let sections = "";

  if (product.type === "garrafa") {
    sections = `
      <section class="modal-section">
        <h3>Complementos grátis</h3>
        <p>Escolha até ${product.config.freeLimit} opções.</p>
        <div class="choice-grid">
          ${renderChoiceButtons(product.config.freeOptions, state.modal.free, "free")}
        </div>
        <div class="counter-text">Selecionados: ${state.modal.free.length}/${product.config.freeLimit}</div>
      </section>

      <section class="modal-section">
        <h3>Complementos pagos</h3>
        <p>Escolha até ${product.config.paidLimit} opções.</p>
        <div class="choice-grid">
          ${renderChoiceButtons(product.config.paidOptions, state.modal.paid, "paid", true)}
        </div>
        <div class="counter-text">Selecionados: ${state.modal.paid.length}/${product.config.paidLimit}</div>
      </section>

      <section class="modal-section">
        <h3>Deseja descartáveis?</h3>
        <p>Escolha 1 opção. Obrigatório.</p>
        <div class="choice-grid">
          ${renderChoiceButtons(["Sim, enviar colher", "Não precisa!"], state.modal.discard ? [state.modal.discard] : [], "discard")}
        </div>
      </section>
    `;
  }

  if (product.type === "acai") {
    sections = renderAcaiOptionSections(state.modal, product.config);
  }

  if (product.type === "acaiCombo") {
    const activeSelection = getActiveSelectionState();
    sections = `
      <section class="combo-tabs-panel">
        <div class="combo-tabs">
          ${state.modal.comboItems
            .map((selection, index) => {
              const selectionTotals = getAcaiSelectionTotals(selection, product.config);
              return `
                <button
                  class="combo-tab ${state.modal.comboActive === index ? "is-active" : ""}"
                  type="button"
                  data-combo-tab="${index}"
                >
                  <strong>${getComboItemLabel(index)}</strong>
                  <small>${selection.free.length} grátis | ${selection.paid.length} pago(s)</small>
                  <span class="combo-tab__status ${selection.discard ? "is-ready" : ""}">
                    ${selection.discard ? "Colher definida" : "Falta escolher colher"}
                  </span>
                  <small>Extras: ${formatCurrency(selectionTotals.total)}</small>
                </button>
              `;
            })
            .join("")}
        </div>
        <div class="counter-text">Cada aba personaliza um copo de 500ml separadamente.</div>
      </section>

      ${renderAcaiOptionSections(activeSelection, product.config)}
    `;

    summaryLines = `
      <div class="summary-line"><span>Preço base do combo:</span> <strong>${formatCurrency(product.price)}</strong></div>
      ${totals.comboTotals
        .map(
          (selectionTotals, index) => `
            <div class="summary-line"><span>${getComboItemLabel(index)} extras grátis:</span> <strong>${formatCurrency(selectionTotals.freeExtrasTotal)}</strong></div>
            <div class="summary-line"><span>${getComboItemLabel(index)} adicionais pagos:</span> <strong>${formatCurrency(selectionTotals.paidExtrasTotal)}</strong></div>
          `
        )
        .join("")}
      <div class="summary-line"><span>Total do combo:</span> <strong>${formatCurrency(totals.total)}</strong></div>
    `;
  }

  if (product.type === "pastel") {
    sections = `
      <section class="modal-section">
        <h3>Escolha o sabor</h3>
        <p>Selecione o sabor do seu pastel.</p>
        <div class="choice-grid">
          ${renderChoiceButtons(DATA.pastelFlavors, state.modal.flavor ? [state.modal.flavor] : [], "flavor")}
        </div>
      </section>
    `;
  }

  elements.customizerContent.innerHTML = `
    <div class="drawer__header">
      <p class="eyebrow">Personalizar item</p>
      <h2 class="modal-title">${escapeHtml(product.title)}</h2>
      <p class="modal-subtitle">${escapeHtml(product.description)}</p>
    </div>

    <div class="customizer-scroll">
      ${sections}

      <section class="modal-section">
        <h3>Algum comentário?</h3>
        <div class="field">
          <textarea id="itemNotes" rows="4" placeholder="Ex: pouco leite condensado, sem colher, entregar rápido...">${escapeHtml(state.modal.notes)}</textarea>
        </div>
      </section>

      <section class="summary-card">
        <h4>${summaryTitle}</h4>
        ${summaryLines}
      </section>
    </div>

    <div class="drawer__footer">
      <button class="btn btn--ghost" type="button" data-close-drawer>Cancelar</button>
      <button class="btn btn--primary" type="button" id="addToCartBtn">Adicionar ao carrinho</button>
    </div>
  `;

  const scrollArea = elements.customizerContent.querySelector(".customizer-scroll");
  if (scrollArea) {
    scrollArea.scrollTop = scrollTop;
  }
}

function toggleSelection(group, value) {
  const product = state.currentProduct;
  if (!product) return;
  const currentScrollTop =
    elements.customizerContent.querySelector(".customizer-scroll")?.scrollTop || 0;
  const selectionState = getActiveSelectionState();

  const currentNotes = document.getElementById("itemNotes");
  if (currentNotes) {
    state.modal.notes = currentNotes.value;
  }

  if (group === "free") {
    if (product.type === "garrafa") {
      const exists = selectionState.free.includes(value);
      if (exists) {
        selectionState.free = selectionState.free.filter((item) => item !== value);
      } else if (selectionState.free.length < product.config.freeLimit) {
        selectionState.free = [...selectionState.free, value];
      } else {
        showToast(`Você pode escolher até ${product.config.freeLimit} complementos grátis.`);
      }
    } else {
      selectionState.free = selectionState.free.includes(value)
        ? selectionState.free.filter((item) => item !== value)
        : [...selectionState.free, value];
    }
  }

  if (group === "paid") {
    if (product.type === "garrafa") {
      const exists = selectionState.paid.includes(value);
      if (exists) {
        selectionState.paid = selectionState.paid.filter((item) => item !== value);
      } else if (selectionState.paid.length < product.config.paidLimit) {
        selectionState.paid = [...selectionState.paid, value];
      } else {
        showToast(`Você pode escolher até ${product.config.paidLimit} complementos pagos.`);
      }
    } else {
      const exists = selectionState.paid.includes(value);
      if (exists) {
        selectionState.paid = selectionState.paid.filter((item) => item !== value);
      } else if (selectionState.paid.length < product.config.paidLimit) {
        selectionState.paid = [...selectionState.paid, value];
      } else {
        showToast(`Você pode escolher até ${product.config.paidLimit} complementos pagos.`);
      }
    }
  }

  if (group === "discard") {
    selectionState.discard = selectionState.discard === value ? "" : value;
  }

  if (group === "flavor") {
    state.modal.flavor = state.modal.flavor === value ? "" : value;
  }

  renderCustomizer({ scrollTop: currentScrollTop });
}

function switchComboTab(index) {
  const product = state.currentProduct;
  if (product?.type !== "acaiCombo") return;
  if (Number.isNaN(index) || index < 0 || index >= state.modal.comboItems.length) return;

  const currentScrollTop =
    elements.customizerContent.querySelector(".customizer-scroll")?.scrollTop || 0;
  const currentNotes = document.getElementById("itemNotes");

  if (currentNotes) {
    state.modal.notes = currentNotes.value;
  }

  state.modal.comboActive = index;
  renderCustomizer({ scrollTop: currentScrollTop });
}

function addCurrentItemToCart() {
  const product = state.currentProduct;
  if (!product) return;

  state.modal.notes = document.getElementById("itemNotes")?.value.trim() || "";

  if (product.type === "acaiCombo") {
    const missingDiscardIndex = state.modal.comboItems.findIndex((selection) => !selection.discard);
    if (missingDiscardIndex !== -1) {
      state.modal.comboActive = missingDiscardIndex;
      renderCustomizer();
      showToast(`Escolha se deseja enviar colher no ${getComboItemLabel(missingDiscardIndex)} antes de adicionar ao carrinho.`);
      return;
    }
  }

  if ((product.type === "garrafa" || product.type === "acai") && !state.modal.discard) {
    showToast("Escolha se deseja enviar colher antes de adicionar ao carrinho.");
    return;
  }

  if (product.type === "pastel" && !state.modal.flavor) {
    showToast("Escolha o sabor do pastel antes de continuar.");
    return;
  }

  const totals = getModalTotals();
  const comboSelections =
    product.type === "acaiCombo"
      ? state.modal.comboItems.map((selection, index) => {
          const selectionTotals = getAcaiSelectionTotals(selection, product.config);
          return {
            label: getComboItemLabel(index),
            freeSelections: [...selection.free],
            paidSelections: [...selection.paid],
            freeExtrasTotal: selectionTotals.freeExtrasTotal,
            paidExtrasTotal: selectionTotals.paidExtrasTotal,
            discard: selection.discard
          };
        })
      : [];

  const cartItem = {
    uid: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    productId: product.id,
    title: product.title,
    basePrice: product.price,
    total: totals.total,
    freeSelections: product.type === "acaiCombo" ? [] : [...state.modal.free],
    paidSelections: product.type === "acaiCombo" ? [] : [...state.modal.paid],
    freeExtrasTotal: totals.freeExtrasTotal,
    paidExtrasTotal: totals.paidExtrasTotal,
    discard: product.type === "acaiCombo" ? "" : state.modal.discard,
    comboSelections,
    notes: state.modal.notes,
    flavor: state.modal.flavor
  };

  state.cart.push(cartItem);
  updateCartBar();
  closeCustomizer();
  showToast("Item adicionado ao carrinho.");
}

function removeCartItem(uid) {
  state.cart = state.cart.filter((item) => item.uid !== uid);
  updateCartBar();
  renderCheckoutSummary();
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => sum + item.total, 0);
}

function updateCartBar() {
  const count = state.cart.length;
  if (!count) {
    elements.cartBar.hidden = true;
    return;
  }

  elements.cartBar.hidden = false;
  elements.cartBarText.textContent = `${count} ${count === 1 ? "item" : "itens"} · ${formatCurrency(getCartTotal())}`;
}

function openCheckout() {
  if (!state.cart.length) {
    showToast("Seu carrinho está vazio.");
    return;
  }
  renderCheckoutSummary();
  elements.checkoutDrawer.classList.add("is-open");
  elements.checkoutDrawer.setAttribute("aria-hidden", "false");
}

function closeCheckout() {
  elements.checkoutDrawer.classList.remove("is-open");
  elements.checkoutDrawer.setAttribute("aria-hidden", "true");
}

function describeCartItem(item) {
  const details = [];
  if (item.comboSelections?.length) {
    item.comboSelections.forEach((selection) => {
      const comboDetails = [];
      if (selection.freeSelections.length) comboDetails.push(`Grátis: ${selection.freeSelections.join(", ")}`);
      if (selection.paidSelections.length) comboDetails.push(`Pagos: ${selection.paidSelections.join(", ")}`);
      if (selection.discard) comboDetails.push(`Colher: ${selection.discard}`);
      details.push(`${selection.label}: ${comboDetails.join(" | ")}`);
    });
  }
  if (item.flavor) details.push(`Sabor: ${item.flavor}`);
  if (item.freeSelections.length) details.push(`Grátis: ${item.freeSelections.join(", ")}`);
  if (item.paidSelections.length) details.push(`Pagos: ${item.paidSelections.join(", ")}`);
  if (item.discard) details.push(`Colher: ${item.discard}`);
  if (item.notes) details.push(`Obs: ${item.notes}`);
  return details;
}

function renderCheckoutSummary() {
  const itemsHtml = state.cart
    .map((item) => {
      const details = describeCartItem(item);
      return `
        <li>
          <strong>${escapeHtml(item.title)} - ${formatCurrency(item.total)}</strong>
          ${details.length ? `<br><span>${escapeHtml(details.join(" | "))}</span>` : ""}
          <br><button type="button" class="btn btn--ghost remove-btn" data-remove-id="${item.uid}">Remover</button>
        </li>
      `;
    })
    .join("");

  elements.checkoutSummary.innerHTML = `
    <h3>Resumo final</h3>
    <div class="summary-box">
      <ul>${itemsHtml}</ul>
      <div class="summary-line"><span>Subtotal:</span> <strong>${formatCurrency(getCartTotal())}</strong></div>
      <div class="summary-line"><span>Total:</span> <strong>${formatCurrency(getCartTotal())}</strong></div>
    </div>
  `;
}

function buildWhatsAppMessage(formData) {
  const paymentMethod = String(formData.get("pagamento") || "Pix");
  const paymentDetails =
    paymentMethod.toLowerCase() === "pix"
      ? `Pix copia e cola:\n${PIX_KEY}`
      : "Troco: não se aplica";
  const itemsText = state.cart
    .map((item, index) => {
      const details = describeCartItem(item);
      return `${index + 1}. ${item.title} - ${formatCurrency(item.total)}${details.length ? `\n   ${details.join("\n   ")}` : ""}`;
    })
    .join("\n\n");

  const observacoes = formData.get("observacoes") ? `Observações do pedido: ${formData.get("observacoes")}` : "Observações do pedido: nenhuma";

  const rawMessage = `Olá, Cantinho do Açaí! Gostaria de fazer um pedido:\n\nCliente: ${formData.get("nome")}\nTelefone: ${formData.get("telefone")}\nEndereço de entrega: ${formData.get("endereco")}, ${formData.get("numero")}\nComplemento: ${formData.get("complemento") || "sem complemento"}\nBairro: ${formData.get("bairro")}\nReferência: ${formData.get("referencia") || "sem referência"}\nForma de pagamento: ${formData.get("pagamento")}\n${paymentDetails}\n${observacoes}\n\nItens do pedido:\n${itemsText}\n\nTotal: ${formatCurrency(getCartTotal())}`;

  return encodeURIComponent(rawMessage);
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  if (!state.cart.length) {
    showToast("Seu carrinho está vazio.");
    return;
  }

  const formData = new FormData(elements.checkoutForm);
  const message = buildWhatsAppMessage(formData);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  const popup = window.open(url, "_blank", "noopener,noreferrer");
  if (!popup) {
    window.location.href = url;
  }
}

function copyTextWithFallback(text) {
  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  helper.style.pointerEvents = "none";
  document.body.appendChild(helper);
  helper.select();
  helper.setSelectionRange(0, helper.value.length);
  document.execCommand("copy");
  document.body.removeChild(helper);
}

async function handleCopyPix() {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(PIX_KEY);
    } else {
      copyTextWithFallback(PIX_KEY);
    }

    if (elements.copyPixBtnLabel) {
      elements.copyPixBtnLabel.textContent = "Copiado!";
      setTimeout(() => {
        if (elements.copyPixBtnLabel) {
          elements.copyPixBtnLabel.textContent = "Copiar";
        }
      }, 1800);
    }

    showToast("Chave Pix copiada.");
  } catch (error) {
    try {
      copyTextWithFallback(PIX_KEY);
      showToast("Chave Pix copiada.");
    } catch {
      showToast("Não foi possível copiar a chave Pix.");
    }
  }
}

let toastTimeout;
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2500);
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const tab = target.closest("[data-category]");
    if (tab) {
      state.activeCategory = tab.getAttribute("data-category");
      renderTabs();
      renderProducts();
      return;
    }

    const productBtn = target.closest("[data-product-id]");
    if (productBtn) {
      openCustomizer(productBtn.getAttribute("data-product-id"));
      return;
    }

    const closeDrawer = target.closest("[data-close-drawer]");
    if (closeDrawer) {
      closeCustomizer();
      return;
    }

    const closeCheckoutBtn = target.closest("[data-close-checkout]");
    if (closeCheckoutBtn) {
      closeCheckout();
      return;
    }

    const comboTab = target.closest("[data-combo-tab]");
    if (comboTab) {
      switchComboTab(Number(comboTab.getAttribute("data-combo-tab")));
      return;
    }

    const choiceButton = target.closest("[data-choice-group]");
    if (choiceButton) {
      toggleSelection(
        choiceButton.getAttribute("data-choice-group"),
        choiceButton.getAttribute("data-choice-value")
      );
      return;
    }

    if (target.id === "addToCartBtn") {
      addCurrentItemToCart();
      return;
    }

    const removeBtn = target.closest("[data-remove-id]");
    if (removeBtn) {
      removeCartItem(removeBtn.getAttribute("data-remove-id"));
    }
  });

  elements.openCheckoutBtn.addEventListener("click", openCheckout);
  elements.checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  elements.copyPixBtn?.addEventListener("click", handleCopyPix);

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeCustomizer();
    closeCheckout();
  });
}

function init() {
  renderTabs();
  renderProducts();
  updateCartBar();
  bindEvents();
}

init();

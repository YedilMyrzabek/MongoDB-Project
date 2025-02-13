/project
  /backend
    /config
      - db.js                 # Подключение к базе данных MongoDB
      - config.js             # Конфигурационные данные (например, JWT секреты, URL БД)
    /models
      - User.js               # Модель пользователя (аутентификация, данные)
      - Product.js            # Модель товара (информация о товаре)
      - Review.js             # Модель отзыва (отзывы пользователей)
      - Order.js              # Модель заказа (покупка, статус)
    /routes
      - userRoutes.js         # Роуты для пользователей (регистрация, вход)
      - productRoutes.js      # Роуты для товаров (добавление, изменение, удаление товаров)
      - reviewRoutes.js       # Роуты для отзывов (добавление, изменение)
      - orderRoutes.js        # Роуты для заказов (создание, обновление)
    /controllers
      - userController.js     # Логика для управления пользователями (регистрация, аутентификация)
      - productController.js  # Логика для управления товарами (CRUD)
      - reviewController.js   # Логика для управления отзывами
      - orderController.js    # Логика для обработки заказов
    /middleware
      - authMiddleware.js     # Middleware для проверки аутентификации пользователей
    server.js                # Основной файл для запуска сервера
    .env                     # Переменные окружения (например, секреты, порты)
  /frontend
    /public
      - index.html           # Основной HTML файл
    /src
      /components
        - Header.js          # Компонент для заголовка сайта
        - ProductList.js     # Компонент для отображения списка товаров
        - ProductCard.js     # Компонент для отображения карточки товара
        - ProductDetails.js  # Страница с подробной информацией о товаре
        - Cart.js            # Компонент корзины покупок
        - Checkout.js        # Компонент оформления заказа
        - Login.js           # Компонент для страницы входа
        - Register.js        # Компонент для страницы регистрации
        - ReviewForm.js      # Форма для добавления отзыва
      /pages
        - HomePage.js        # Главная страница
        - ProductPage.js     # Страница с товаром
        - CartPage.js        # Страница корзины
        - CheckoutPage.js    # Страница оформления заказа
        - LoginPage.js       # Страница входа
        - RegisterPage.js    # Страница регистрации
      /utils
        - api.js             # Утилита для работы с API (axios или fetch)
      App.js                 # Основной компонент приложения
      index.js               # Точка входа для React
  /node_modules
  .gitignore                # Игнорируемые файлы для git
  package.json              # Зависимости и конфигурация проекта
  README.md                 # Документация по проекту

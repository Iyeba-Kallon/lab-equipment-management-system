from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from backend.config import DevelopmentConfig

db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()
cors = CORS()

def create_app(config_class=DevelopmentConfig):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": "*"}})

    # Register blueprints (to be created later)
    # from app.routes import auth, equipment, reservations
    # app.register_blueprint(auth.bp)
    
    @app.route('/health')
    def health_check():
        return {'status': 'healthy', 'message': 'Lab Equipment Management System API is running'}

    return app

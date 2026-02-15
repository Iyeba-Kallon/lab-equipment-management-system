from flask import Flask
from backend.config import DevelopmentConfig
from backend.app.extensions import db, migrate, jwt, cors

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

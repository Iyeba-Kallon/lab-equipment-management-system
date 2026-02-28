from app.extensions import db
from datetime import datetime
from sqlalchemy.dialects.postgresql import JSONB

class Equipment(db.Model):
    __tablename__ = 'equipment'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, index=True)
    category = db.Column(db.String(50), nullable=False, index=True) # oscilloscope, etc.
    manufacturer = db.Column(db.String(50))
    model_number = db.Column(db.String(50))
    serial_number = db.Column(db.String(50), unique=True, index=True)
    purchase_date = db.Column(db.Date)
    purchase_price = db.Column(db.Float)
    location = db.Column(db.String(100)) # building, room, bench
    status = db.Column(db.String(20), default='available', index=True) # available, in_use, maintenance, calibration, retired
    specifications = db.Column(JSONB) # Postgres JSONB for flexible specs
    image_url = db.Column(db.String(255))
    manual_url = db.Column(db.String(255))
    notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'manufacturer': self.manufacturer,
            'model_number': self.model_number,
            'serial_number': self.serial_number,
            'location': self.location,
            'status': self.status,
            'specifications': self.specifications,
            'image_url': self.image_url
        }

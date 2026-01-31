# Vehicle Log Book Backend

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Start MongoDB**
   Make sure MongoDB is running on your system (default: localhost:27017)

3. **Environment Variables**
   The `.env` file is already configured with:
   - MONGODB_URI=mongodb://localhost:27017/vehicle-logbook
   - PORT=5000

4. **Run Backend**
   ```bash
   npm run dev
   ```

## API Endpoints

### Vehicles
- `POST /api/vehicles` - Add new vehicle
- `GET /api/vehicles` - Get all vehicles

### Logs  
- `POST /api/logs` - Add new log entry
- `GET /api/logs` - Get all log entries

## Frontend Connection

The frontend is already configured to connect to this backend at `http://localhost:5000/api`.

## Database Models

### Vehicle
- vehicleNumber (unique)
- model
- type  
- ownerName
- driverName
- createdAt

### Log
- vehicleNumber
- driverName
- date
- startKM
- endKM
- distance (auto-calculated)
- fuelUsed
- purpose
- createdAt"# car-backend" 
"# car-bck" 

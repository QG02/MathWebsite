# Imports
from fastapi.middleware.cors import CORSMiddleware # Allows API to accept requests from backend
from fastapi import FastAPI # Creates the web API
from generators.linear import generate_linear_equation # Import function from generators folder

# Initialize API app instance
app = FastAPI()

# Allows frontend to call the API
app.add_middleware(
    CORSMiddleware,
    allow_origins =["http://localhost:5173"], # Only allows this origin to send requests
    allow_credentials=True, # Allow cookies/authentication if needed
    allow_methods=["*"], # All HTTP methods are allowed
    allow_headers=["*"] # All request headers are accepted
)

# Test if server is running
@app.get("/")
def root():
    return {"Message" : "Algebra 1 API is live"}

# Test if function is working
@app.get("/generate-linear")
def get_linear_equation():
    return generate_linear_equation()

# CORSMiddleware is used to enable Cross-Origin Resource Sharing (CORS). This is necessary when your frontend (e.g., React app) is hosted on a different domain or port than your backend (FastAPI) — which is very common during development.
# allow_methods
# A list of HTTP methods you want to allow from the frontend.

# Common methods:
# Method	Use case
# "GET"	Fetch data (safe)
# "POST"	Submit data (form, JSON)
# "PUT"	Update data
# "DELETE"	Delete data
# "OPTIONS"	Preflight requests (automatic by browser)

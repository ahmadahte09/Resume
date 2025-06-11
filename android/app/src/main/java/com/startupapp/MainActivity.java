import org.devio.rn.splashscreen.SplashScreen; // Add this import

@Override
protected void onCreate(Bundle savedInstanceState) {
  SplashScreen.show(this);  // Add this line
  super.onCreate(savedInstanceState);
}

@RestController
public class ProfileController extends BaseController {

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public String profile() {
        return "profile: " + hash("profile");
    }
}

// Ce controller hérite d’une classe commune qui contient la méthode hash :
public abstract class BaseController {
    protected String hash(String value) {
        // ...
    }
}
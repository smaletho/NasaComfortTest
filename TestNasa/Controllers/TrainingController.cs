using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TheArtOfDev;

namespace TestNasa.Controllers
{
    public class TrainingController : Controller
    {
        //
        // GET: /Training/

        public ActionResult Index()
        {
            TrainingModel model = new TrainingModel();
            model.Nav_A = 1;
            model.Nav_B = 1;
            model.Nav_C = 1;
            return View("Index", model);
        }

        public ActionResult SetPage(int a, int b, int c)
        {
            TrainingModel model = new TrainingModel();
            model.Nav_A = a;
            model.Nav_B = b;
            model.Nav_C = c;

            return PartialView("Index", model);
            
        }

        public ActionResult CreateImage(int a, int b, int c, double scale)
        {
            string imageUrl = "Content/Screenshots/" + a.ToString() + "-" + b.ToString() + "-" + c.ToString() + ".png";
                        
            ImageAnnotateModel model = new ImageAnnotateModel();
            model.ImageString = imageUrl;
            model.DocumentScale = scale;
            
            return View("ImageEdit", model);
        }

        public ActionResult ImageEdit()
        {
            return View("ImageEdit");
        }








        public string RenderViewToString(ControllerContext context, string viewName, object model)
        {
            if (string.IsNullOrEmpty(viewName))
                viewName = context.RouteData.GetRequiredString("action");

            ViewDataDictionary viewData = new ViewDataDictionary(model);

            using (StringWriter sw = new StringWriter())
            {
                ViewResult result = (ViewResult)SetPage(1, 2, 1);

                result.View = ViewEngines.Engines.FindView(ControllerContext, "SetPage", "").View;
                //result.View = ViewEngines.Engines.FindPartialView(ControllerContext, "Email").View;

                ViewContext vc = new ViewContext(ControllerContext, result.View, result.ViewData, result.TempData, sw);

                result.View.Render(vc, sw);

                return sw.GetStringBuilder().ToString();
            }
        }

    }

    public class TrainingModel
    {
        public int Nav_A { get; set; }
        public int Nav_B { get; set; }
        public int Nav_C { get; set; }
    }

    public class ImageAnnotateModel
    {
        public string ImageString { get; set; }
        public double DocumentScale { get; set; }
    }
}

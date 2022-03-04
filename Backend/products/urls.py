from rest_framework.routers import SimpleRouter
from products import views

router = SimpleRouter()

router.register(r'product',views.ProductView)
router.register(r'productImages',views.ProductImageView)


urlpatterns = router.urls